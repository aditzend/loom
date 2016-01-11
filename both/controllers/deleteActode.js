DeleteActodeController = AppController.extend({
  onAfterAction: function() {
    Meta.setTitle('Delete');
},
  data: function(){
    return Actodes.findOne({_id: this.params._id});
  }
});

DeleteActodeController.events({
  'click [data-action=confirmDeleteSelectedActode]' : function() {
    console.log('delete ' + Session.get("selectedActode"));
    //var c = confirm('Vas a eliminar todos los datos de este cliente, estas seguro?');
    //if (c === true) {
      Actodes.remove({_id : Session.get("selectedActode")});
      Router.go('deleteConfirmed');
    //}
  },
});
