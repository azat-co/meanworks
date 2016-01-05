var fs = require('fs')
var mongo = require('mongodb'),
  supertest = require('supertest'),
  path = require('path'),
  mongo = require('mongodb')
  equal = require('deep-equal')

exports.problem = require(path.join(__dirname, '..', '..', 'problem'))(__dirname)
exports.solution = require(path.join(__dirname, '..', '..', 'solution'))(__dirname)
var dbName = 'ngfullstacknew-dev'

exports.verify = function (args, cb) {
  var cwd = process.cwd(),
    url = 'http://localhost:9000'

  var dbUrl = 'mongodb://localhost:27017/' + dbName

  mongo.connect(dbUrl, function(err, db) {
    if (err) {
      console.error('Cannot connect to MongoDB, is it running on default port 27017?')
      return cb(false)
    }
    var transactionsCollection = db.collection('transactions'),
      accountsCollection  = db.collection('accounts')
    accountsCollection.find({}, {sort: {_id:1}}).toArray(function(error, accounts){
      transactionsCollection.find({}, {sort: {_id:1}}).toArray(function(error, transactions){
        if (error) return next(error)
        if (accounts.length == 0) {
          console.error(`The accounts collection is empty in the ${dbName} database.`)
          return cb(false)
        }
        if (transactions.length == 0) {
          console.error(`The accounts collection is empty in the ${dbName} database.`)
          return cb(false)
        }
        console.log('Awesome. You have the data.')
        db.close()
        supertest(url)
          .get('/api/accounts')
          .expect(200)
          .end(function(err, res){
            if (err) {
              console.error('Cannot connect to the server on %s', url)
              console.error('The server must be running')
              console.error('This is the error: ', err)
              return cb(false)
            }
            if (res.body.length<2) {
              console.error('The response is not right. Did you seed the database?')
              console.error('Your server responded with: \n', res.body)
              return cb(false)
            }
            if (equal(res.body, accounts)) {
              console.error('The data from the database is different from the server response')
              console.error('Your server responded with: \n', res.body)
              console.error('Your DB has this: \n', accounts)
              return cb(false)
            }
            console.log('Server response matches the database data. ;-)');
            console.info('✓ Success!')
            console.log('Your server responded with: ', res.body)
            supertest(url)
              .get('/api/transactions')
              .expect(200)
              .end(function(err, res){
                if (err) {
                  console.error('Cannot connect to the server on %s', url)
                  console.error('The server must be running')
                  console.error('This is the error: ', err)
                  return cb(false)
                }
                if (res.body.length<2) {
                  console.error('The response is not right. Did you seed the database?')
                  console.error('Your server responded with: \n', res.body)
                  return cb(false)
                }
                if (equal(res.body, transactions)) {
                  console.error('The data from the database is different from the server response')
                  console.error('Your server responded with: \n', res.body)
                  console.error('Your DB has this: \n', transactions)
                  return cb(false)
                }
                console.log('Server response matches the database data. ;-)');
                console.info('✓ Success!')
                console.log('Your server responded with: ', res.body)
                return cb(true)
              })
          })
      })
    })
  })

}
