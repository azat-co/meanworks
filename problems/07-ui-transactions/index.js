var tags = [
  '<td class="col-md-3 ng-binding">Safeway</td>',
  '<td class="col-md-2 ng-binding">2015-02-21T19:32:52:823<i ng-hide="transaction.date!=\'pending\'" class="glyphicon glyphicon-refresh ng-hide"></i></td>',
  '<td class="col-md-3 ng-binding">Direct Deposit</td>'
]
var fs = require('fs')
exports.problem = fs.createReadStream(__dirname + '/problem.txt')
exports.solution = fs.createReadStream(__dirname + '/solution.txt')

var mongo = require('mongodb'),
  supertest = require('supertest'),
  path = require('path'),
  mongo = require('mongodb'),
  fetchHtml = require('../../fetch-html.js')

exports.verify = function (args, cb) {
  var cwd = process.cwd(),
    url = 'http://localhost:3000'

  var dbUrl = 'mongodb://localhost:27017/ngfullstacknew-dev'

  mongo.connect(dbUrl, function(err, db) {
    if (err) {
      console.error('Cannot connect to MongoDB, is it running on default port 27017?')
      return cb(false)
    }
    var transactionsCollection = db.collection('transactions'),
      transactionsCollection  = db.collection('transactions')

    transactionsCollection.find({}, {sort: {_id:-1}}).toArray(function(error, transactions){
      if (error) return next(error)
      if (transactions.length == 0) {
        console.error('The transactions collection is empty in the mean database.')
        return cb(false)
      }
      console.log('Awesome. You have the data.')
      db.close()
      fetchHtml('http://localhost:9000/transactions', function(err, html){
        if (err) {
          // console.error(err)
          return cb(false)
        }
        var count = 0
        tags.forEach((item, index, list)=>{
          // TODO: check the UI data agains DB data
          count ++
          if (html.indexOf(item)<0) {
            console.error(`When checking the content of the page, the ${item} element was not found`)
            console.error('Please use the tag template and content provided at http://bit.ly/1TB1IC0 and http://bit.ly/1TB1LOp.')
            return cb(false)
          }
          console.log('The %s tag was FOUND!', item)
          if (count == tags.length) {
            console.info('✓ We found some HTML tags. GOOD JOB. Proceed to the next adventure!');
            return cb(true)
          }
        })

      })
    })

  })

}
