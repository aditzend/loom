SearchController = AppController.extend({
  waitOn: function() {
    return this.subscribe('actodes');
    //this.subscribe('relationships', Meteor.user().relatedActode);
  },
  data: {
    //actodes: Actodes.find({})

  },
  onAfterAction: function () {
    Meta.setTitle('Buscar');
  }
});

SearchController.events({
  'click [data-action=doSomething]': function (e) {

    console.log(e.target.value);
  },
  'click [data-action=setActualActode]': function() {
    console.log(this.name.value);
  },

  'click [data-action=edit]' : function() {
    console.log('edit ' + Session.get("selectedActode"));
    Router.go("/edit/" + Session.get("selectedActode"));


  }
});
