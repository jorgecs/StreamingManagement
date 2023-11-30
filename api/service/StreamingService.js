'use strict';


/**
 * Delete streaming
 *
 * streamingId String streaming to delete
 * returns APIResponse
 **/
exports.streamingDelete = function(streamingId) {
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


/**
 * Configure streaming
 *
 * streamingId String stream that needs to be updated
 * title String The title to change (optional)
 * description String The description to change (optional)
 * returns Streaming
 **/
exports.streamingEdit = function(streamingId,title,description) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "{}",
  "streamId" : "1",
  "description" : "Doing my first stream",
  "title" : "First stream"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * End streaming
 *
 * streamingId String streaming to end
 * returns APIResponse
 **/
exports.streamingEnd = function(streamingId) {
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


/**
 * Streaming moderation
 *
 * streamingId String streaming to moderate
 * moderation Integer type of moderation
 * returns Streaming
 **/
exports.streamingModerate = function(streamingId,moderation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "{}",
  "streamId" : "1",
  "description" : "Doing my first stream",
  "title" : "First stream"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Receive streaming
 *
 * streamingId String Streaming ID to get
 * returns Streaming
 **/
exports.streamingReceive = function(streamingId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "{}",
  "streamId" : "1",
  "description" : "Doing my first stream",
  "title" : "First stream"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Live streaming
 *
 * body Streaming 
 * returns APIResponse
 **/
exports.streamingStart = function(body) {
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

