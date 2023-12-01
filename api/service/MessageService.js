'use strict';


/**
 * Receive message
 *
 * messageId String message to retrieve
 * returns Message
 **/
exports.streamingReceiveMessage = function(messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "messageType" : 3,
  "messageId" : "1",
  "emitter" : "{}",
  "content" : "Hello"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send message
 *
 * body Message 
 * returns APIResponse
 **/
exports.streamingSendMessage = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Operation returned successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

