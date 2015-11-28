SearchController = AppController.extend({
  waitOn: function() {
    return this.subscribe('actodes');
  },
  data: {
    actodes: Actodes.find({})
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
  'click [data-action=delete]' : function() {
    console.log('delete ' + Session.get("selectedActode"));
    var c = confirm('Vas a eliminar todos los datos de este cliente, estas seguro?');
    if (c === true) {
      Actodes.remove({_id : Session.get("selectedActode")});
    }

  },
  'click [data-action=edit]' : function() {
    console.log('edit ' + Session.get("selectedActode"));
    Router.go("/edit/" + Session.get("selectedActode"));


  }
});
