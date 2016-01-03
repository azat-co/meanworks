'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TransactionSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  "date": String, // can be "pending"
  "desc": {
    "long": String,
    "short": String  // limit length
  },
  "category": String, // enum?
  "amount": Number,
  "balance": Number,
  dispute: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('Transaction', TransactionSchema);
