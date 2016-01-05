PROBLEM

How do you persist the data from/to a single-page app? Via the server: Angular app will make AJAX/XHR requests to the server on specific routes such as /api/accounts for working with accounts. Similarly to GET /api/accounts, we need GET /api/transactions. Create GET /transactions route that sends back the transactions in JSON (from database!).

We'll need some RESTful API or RESTful endpoints/routes for /api/accounts and /api/transactions.

1. Create endpoints/routes for `/api/accounts`
2. Create endpoints/routes for `/api/transactions`
3. Add appropriate model schema to account model
4. Add appropriate model schema to transaction model
5. Check that the endpoints are working with browser, CURL or Postman (e.g., GET `/api/accounts`)

---

HINTS

Use `$ yo angular-fullstack:endpoint account` to create an endpoint.

Edit file `/server/api/account/account.model.js` to add fields for account document:

var AccountSchema = new mongoose.Schema({
  name: String,
  info: String,
  number: Number,
  active: Boolean
});

Similar for transaction:

var TransactionSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  "date": String,
  "desc": {
    "long": String,
    "short": String  
  },
  "category": String,
  "amount": Number,
  "balance": Number,
  dispute: {
    type: Boolean,
    default: false
  }
})


The app must be running with `grunt serve` when you verify!

If you are curious how Mongoose gets the database name, it's in the `server/config/environment/development.js`:

uri: 'mongodb://localhost/ngfullstacknew-dev'

While the list of all HTTP endpoints with methods are in `server/api/transaction/index.js`:

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
