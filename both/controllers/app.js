AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  fastRender: true

});

AppController.events({




  'click [data-action=goToProfilePage]' : function() {
    Router.go('/profiles/' + Session.get("selectedActode"));
  },



  'click [data-action=actodeTest1]': function() {

    //inserto doc en Actodes
    Actodes.insert({
      name: 'actode',
      lastName: 'test',
      userId: '',
      createdAt: moment().toDate()
    });
    var createdActode = Actodes.findOne({userId:Meteor.userId()}, {fields: {name:1} });

console.log("creating related actode "+ Meteor.userId() + ' actode is: ' + createdActode.name );
  }

});
