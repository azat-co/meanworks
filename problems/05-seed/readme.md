PROBLEM

We'll need some seed data for our application. For example, this is how a transaction might look like:

{
	"amount": 350.15,
	"balance": 1200.85,
	"category": "Utilities",
	"date": "pending",
	"desc": {
		"long": "This is a description",
		"short": "PG&E"
	}
}

While an account document might look like:

{
  "name": "Emergency Fund",
  "type": "savings",
  "number": "12532343",
  "routing": "031176110"
}

Download the JSON files for transactions and accounts:

https://github.com/azat-co/meanworks/raw/master/app/transactions.json
https://github.com/azat-co/meanworks/raw/master/app/accounts.json

Start the database (on localhost and default port) and execute the imports form JSON files with these commands:

$ mongoimport  --host=127.0.0.1 --port=27017 --db ngfullstacknew-dev --collection transactions --file transactions.json --jsonArray
$ mongoimport  --host=127.0.0.1 --port=27017 --db ngfullstacknew-dev --collection accounts --file accounts.json --jsonArray

--db ngfullstacknew-dev: name of the database ngfullstacknew-dev
--collection: name of the collections
--jsonArray: allows mongoimport to take an array instead of an object

**If you completed bonus in adventure 4-folder, run `$ npm run seed-accounts` and `$ npm run seed-transactions`.

You should be able to see your data in mongo console (`$ mongo`) with these commands:

> use mean
> db.accounts.find()
> db.transactions.find()

Run `$ $ADVENTURE_COMMAND verify` when you are ready to check the installation and version of MongoDB.

---

HINTS

The database must be running in its own window/tab or in detached mode.

To start the DB, run `$ mongod`.
