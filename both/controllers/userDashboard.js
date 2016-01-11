//var relatedActode = Meteor.users.findOne( {_id:"Ry7t5c2qwc4RGojCk"} , {fields : {relatedActode} } );
//console.log('relatedActode ' + relatedActode);


UserDashboardController = AppController.extend({
  layoutTemplate: 'appLayout',
  data: {
    user: function()    {
      var currentUser = Meteor.userId();
      var userDocument = Meteor.users.findOne( {_id:currentUser} );
      return userDocument;
    },

}
});

UserDashboardController.events({

'click [data-action=fafa]': function() {
  console.log("fafa");
Router.go('/');
},
'click [data-action=logout]' : function() {
  AccountsTemplates.logout();
  console.log("LOGGING OUT");
},
})
