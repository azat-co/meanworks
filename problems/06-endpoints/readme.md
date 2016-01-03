PROBLEM

In this adventure, we'll create an endpoint on the server for GET request on the accounts resource.

Create index.js for the Express.js server.
In index.js, instantiate the app and create the GET /api/accounts route.

The route needs to fetch the accounts data from the database (remember, we seeded it) and to send back the accounts in JSON.

The example of the server and a route is this (you'll need to add the DB connect and the route logic):

var express = require('express'),
  app = express(),
  mongo = require('mongodb')

  // TODO: DB connection
  app.get('/api/accounts', function(req, res, next){
    // TODO: use DB collection to find accounts, send then back in JSON
  })

  app.listen(3000)


The MongoDB connection is established with this command:

var url = 'mongodb://localhost:27017/mean';
mongo.connect(url, function(err, db) {
  if (err) {
    console.error(err)
    return process.exit(1)
  }
  accountsCollection  = db.collection('accounts')

})

You can download tests for the server from app/test.js.
To run only GET /api/accounts, add `it.only` to `it` on line 64: app/test.js#L64

Run `$ $ADVENTURE_COMMAND verify` when you are ready to check the installation and version of MongoDB.

---

BONUS:

Use the following middleware in your Express app (install with npm, include and apply in index.js):

body-parser: body parsing (URL-encodeded and JSON)
errorhandler: development error handling
cors: CORS headers
morgan: logging

---

HINTS

The database must be running in its own window/tab or in detached mode.

To start the DB, run `$ mongod`.

The syntax for the MongoDB find is this:

accountsCollection.find({}, {sort: {_id:-1}}).toArray(function(error, accounts){
  if (error) return next(error)
  console.log(accounts)
})



---

Run `$ $ADVENTURE_COMMAND verify` once that is done.

Some helpful commands:

`$ $ADVENTURE_COMMAND help` to get help with the workshop
`$ $ADVENTURE_COMMAND print` to re-display the current exercise
`$ $ADVENTURE_COMMAND verify YOUR_FILE_NAME` to verify that you have finished an exercise
`$ $ADVENTURE_COMMAND solution` to show the solution for the current exercise

`$ $ADVENTURE_COMMAND verify skip` to skip it.
