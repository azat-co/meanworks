/**
 * Account model events
 */

'use strict';

import {EventEmitter} from 'events';
var Account = require('./account.model');
var AccountEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AccountEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Account.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AccountEvents.emit(event + ':' + doc._id, doc);
    AccountEvents.emit(event, doc);
  }
}

export default AccountEvents;
