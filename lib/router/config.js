Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('actodes'),
      Meteor.subscribe('userData'),
      //Meteor.subscribe("relationships", Meteor.user().belongsTo)
    ]
  }
});

// Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'newActRel', 'search','editActode']
});
