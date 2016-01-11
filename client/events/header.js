Template._header.events({
  'click [data-action=navBarLogout]' : function() {
    AccountsTemplates.logout();
    Session.set("relatedActode", null);

    console.log("LOGGING OUT");
  },
});
