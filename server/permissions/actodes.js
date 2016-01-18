Actodes.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId;
  },
  'remove': function(userId, doc) {
    console.log('ORIGIN : ' + doc.origin);

    if (doc.author === userId) {
      return userId;
      console.log("OWN ACTODE: DELETE AUTHORIZED");

    }else{
      console.log("ACTODE NOT OWNED. DELETE DENIED.");

    }
  }
});
