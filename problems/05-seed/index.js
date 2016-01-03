var fs = require('fs')
var mongo = require('mongodb'),
  path = require('path')

exports.problem = require(path.join(__dirname, '..', '..', 'problem'))(__dirname)
exports.solution = require(path.join(__dirname, '..', '..', 'solution'))(__dirname)

exports.verify = function (args, cb) {
  var cwd = process.cwd()
  console.log('Checking for the transactions seed file...')
  try {
    var transactions = require(path.join(cwd, 'transactions.json'))
  } catch (e) {
    console.error('Cannot find or parse transactions.json in %s', cwd)
    console.error('Please download transactions.json.')
    return cb(false)
  }
  console.log('Found the transactions seed file.')
  console.log('Checking for the accounts seed file...')
  try {
    var accounts = require(path.join(cwd, 'accounts.json'))
  } catch (e) {
    console.error('Cannot find or parse accounts.json in %s', cwd)
    console.error('Please download accounts.json.')
    return cb(false)
  }
  console.log('Found the accounts seed file... Connecting to the database')
  var url = 'mongodb://localhost:27017/ngfullstacknew-dev'

  mongo.connect(url, function(err, db) {
    if (err) {
      console.error('Cannot connect to MongoDB, is it running on default port 27017?')
      return cb(false)
    }
    console.log('Connected to the database... getting records.')
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
