var fs = require('fs')

exports.problem = fs.createReadStream(__dirname + '/problem.txt')
exports.solution = fs.createReadStream(__dirname + '/solution.txt')

var mongo = require('mongodb'),
  supertest = require('supertest'),
  path = require('path'),
  mongo = require('mongodb')

exports.verify = function (args, cb) {
  var cwd = process.cwd(),
    url = 'http://localhost:3000',
    bonus = false
  try {
    var conf = fs.readFileSync(path.resolve(cwd, 'index.js'), 'utf8')
    if (conf.indexOf('app.use')>-1
      && conf.indexOf('body-parser')>-1
      && conf.indexOf('errorhandler')>-1
      && conf.indexOf('cors')>-1
      && conf.indexOf('morgan')>-1
      ) bonus = true
  } catch (e) {
    console.log('Cannot find index.js in %s', cwd)
    console.log('Please create index.js or navigate to the right folder.')
    return cb(false)
  }
  var dbUrl = 'mongodb://localhost:27017/mean'

  mongo.connect(dbUrl, function(err, db) {
    if (err) {
      console.error('Cannot connect to MongoDB, is it running on default port 27017?')
      return cb(false)
    }
    var transactionsCollection = db.collection('transactions'),
      accountsCollection  = db.collection('accounts')

    accountsCollection.find({}, {sort: {_id:-1}}).toArray(function(error, accounts){
      if (error) return next(error)
      if (accounts.length == 0) {
        console.error('The accounts collection is empty in the mean database.')
        return cb(false)
      }
      console.log('Awesome. You have the data.')
      db.close()
      supertest(url)
        .get('/api/accounts')
        .expect(200)
        .end(function(err, res){
          if (err) {
            console.log('Cannot connect to the server on %s', url)
            console.log('The server must be running')
            console.log('This is the error: ', err)
            return cb(false)
          }
          if (res.body.length<2) {
            console.log('The response is not right. Did you seed the database?')
            console.log('Your server responded with: ', res.body)
            return cb(false)
          }
          if (JSON.stringify(res.body) !== JSON.stringify(accounts)) {
            console.log('The data from the database is different from the server response')
            console.log('Your server responded with: ', res.body)
            console.log('Your DB has this: ', accounts)
            return cb(false)
          }
          console.log('Server response matches the database data. ;-)');
          if (bonus) {
            console.log('We spotted some middleware in the index.js file - great!')
          }
          console.log('Success!')
          console.log('Your server responded with: ', res.body)
          cb(true)
        })
    })

  })

}
