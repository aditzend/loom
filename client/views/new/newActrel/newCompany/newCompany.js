console.log("[CLIENT] Loading newCompany.js");

Template.newCompany.onCreated( function() {
  console.log("newCompany tpl created");
  Actodes.attachSchema(Schema.Company, {replace:true});
  console.log("Schema.Company attached");

});

var hooksObject = {
  after: {
    insert: function(error, result) {
      console.log('INSERTED OK : ' + result);
      Session.set('CURR_COMPANY_ID', result);
      Session.set('STEP_COMPLETED', 'COMPANY_CREATED');
      Session.set('SHOW_COMPLETED_TPL', 'displayCompany');

    }
  }
}


AutoForm.hooks({
  insertCompany: hooksObject
});
