var fs = require('fs')

exports.problem = fs.createReadStream(__dirname + '/problem.txt')
exports.solution = fs.createReadStream(__dirname + '/solution.txt')

var mongo = require('mongodb'),
  path = require('path')

exports.verify = function (args, cb) {
  var cwd = process.cwd()
  try {
    var transactions = require(path.join(cwd, 'transactions.json'))
  } catch (e) {
    console.error('Cannot find or parse transactions.json in %s', cwd)
    console.error('Please download transactions.json.')
    return cb(false)
  }
  try {
    var accounts = require(path.join(cwd, 'accounts.json'))
  } catch (e) {
    console.error('Cannot find or parse accounts.json in %s', cwd)
    console.error('Please download accounts.json.')
    return cb(false)
  }

  var url = 'mongodb://localhost:27017/ngfullstacknew-dev'

  mongo.connect(url, function(err, db) {
    if (err) {
      console.error('Cannot connect to MongoDB, is it running on default port 27017?')
      return cb(false)
    }
    var transactionsCollection = db.collection('transactions'),
      accountsCollection  = db.collection('accounts')
    transactionsCollection.find({}, {sort: {_id:-1}}).toArray(function(error, transactions){
      if (error) return next(error)
      if (transactions.length == 0) {
        console.error('The transactions collection is empty in the mean database.')
        return cb(false)
      }
      accountsCollection.find({}, {sort: {_id:-1}}).toArray(function(error, accounts){
        if (error) return next(error)
        if (accounts.length == 0) {
          console.error('The accounts collection is empty in the mean database.')
          return cb(false)
        }
        console.info('✓ Awesome. You have the data.')
        db.close()
        return cb(true)
      })
    })
  })


}
