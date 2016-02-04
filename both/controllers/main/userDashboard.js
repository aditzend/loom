//var relatedActode = Meteor.users.findOne( {_id:"Ry7t5c2qwc4RGojCk"} , {fields : {relatedActode} } );
//console.log('relatedActode ' + relatedActode);


UserDashboardController = AppController.extend({
  layoutTemplate: 'appLayout',
  //templateStr = "'"+this.params.belongsToId + '-' + this.params.template+"'";


  //name:"34dsomJC8Rp6PYJjG-dashboard",
  template: "34dsomJC8Rp6PYJjG-dashboard",
  //data: {
  //  user: function()    {
  //    var currentUser = Meteor.userId();
  //    var userDocument = Meteor.users.findOne( {_id:currentUser} );
  //    return userDocument;
  //  },
  // }
    //waitOn: function() {
    //  return Meteor.subscribe('actodes');
      //this.subscribe('relationships', Meteor.user().belongsTo);
  //  },


});

UserDashboardController.events({

})
