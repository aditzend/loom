console.log("[COMMON] Loading newCustomerController.js ...");

NewCustomerController = AppController.extend({
  onAfterAction: function() {
    Meta.setTitle("Nuevo Cliente");
    this.render("newCustomerMain");
    //Blaze.render(Template.newCompany, com)
  },
  layoutTemplate: 'appLayout'
});
