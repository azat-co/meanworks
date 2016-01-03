PROBLEM

We need to create a folder for our project, so everything can stay neat and well organized.

Create a folder with the name is `ng-fullstack-new` in the meanworks folder, and navigate (cd) into it.
This is where you'll put all of your project files.

Create full stack MEAN project ng-fullstack-new with this command:

$ yo angular-fullstack ng-fullstack-new

It's important to maintain your code in that folder because MEANWorks will look for your code in that folder.

Run `$ $ADVENTURE_COMMAND verify` when you are ready to check the installation and version of MongoDB.

BONUS points if you copy these script commands into your new package.json:

"scripts": {
  "dev": "node ./node_modules/nodemon/bin/nodemon.js index.js",
  "seed-transactions": "mongoimport  --host=127.0.0.1 --port=27017 --db ngfullstacknew-dev --collection transactions --file transactions.json --jsonArray",
  "seed-accounts": "mongoimport  --host=127.0.0.1 --port=27017 --db ngfullstacknew-dev --collection accounts --file accounts.json --jsonArray"
},

We'll be using these commands later.

---

HINTS

Use `$ mkdir ng-fullstack-new` to create folder and `$ cd ng-fullstack-new` to navigate into it.

To generate the app, use `$ yo angular-fullstack ng-fullstack-new`.

Answer questions like this:

? What would you like to write markup with? (Use arrow keys)
❯ HTML

? What would you like to write stylesheets with?
❯ CSS

? What Angular router would you like to use? (Use arrow keys)
  ngRoute
❯ uiRouter

? Would you like to include Bootstrap? (Y/n) Y

? Would you like to include UI Bootstrap? (Y/n) Y

? What would you like to use for data modeling? (Press <space> to select)
❯◉ Mongoose (MongoDB)

? Would you scaffold out an authentication boilerplate? (Y/n) n

? Would you like to use socket.io? (Y/n) n

? What would you like to write tests with? (Use arrow keys)
  Jasmine
> Mocha + Chai + Sinon

? What would you like to write Chai assertions with? (Use arrow keys)
❯ Expect
