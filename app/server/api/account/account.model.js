'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var AccountSchema = new mongoose.Schema({
  name: String,
  info: String,
  number: Number,
  active: Boolean
});

export default mongoose.model('Account', AccountSchema);
