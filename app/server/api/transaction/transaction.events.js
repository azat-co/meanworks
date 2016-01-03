/**
 * Transaction model events
 */

'use strict';

import {EventEmitter} from 'events';
var Transaction = require('./transaction.model');
var TransactionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TransactionEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Transaction.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TransactionEvents.emit(event + ':' + doc._id, doc);
    TransactionEvents.emit(event, doc);
  }
}

export default TransactionEvents;
