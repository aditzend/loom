console.log("[CLIENT] Loading newPerson.js");



Template.newPerson.onCreated( function() {
  console.log("newPerson tpl created");
  Actodes.attachSchema(Schema.Person, {replace:true});
  console.log("Schema.Person attached");

});

Template.newPerson.helpers({
  
  isValidPhone : function() {
    var phone = AutoForm.getFieldValue('mobile', 'insertPerson');
    return Phoneformat.isValidNumber(phone,'AR') ? 'valid':'invalid';
  }

});

var hooksObject = {
  after: {
    insert: function(error, result) {
      console.log('INSERTED OK : ' + result);
      Session.set('actodeId', result);
    }
  },
  formToModifier: function(modifier){
    console.log("modifier");

  }
}


AutoForm.hooks({
  insertPerson: hooksObject
});
