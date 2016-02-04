DashboardController = AppController.extend({
  waitOn: function() {
    return [
      Meteor.subscribe('relationships', Meteor.user().belongsTo),
      Meteor.subscribe("actodes")
    ]
  },
  onAfterAction: function () {
    Meta.setTitle('Panel');
  },
  fastRender: true
});

DashboardController.events({
  'click [data-action=goTo]': function (e) {
    //console.log(e.target.name);
    goToStr = '/' + e.target.name;
    Router.go(goToStr);


  }
});
