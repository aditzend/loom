ProfileController = AppController.extend({


  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});

ProfileController.events({
  'click [data-action=fan]': function () {
  console.log("fan");
  },
  'click [data-action=setDataStateToUpdate]': function() {
    Session.set('dataState','update');
    console.log("updating...");
  },
  'click [data-action=editable]': function(e) {
    Session.set("editing",e.target.id);
    console.log(e.target.id);
  },
  'click [data-action=update]': function() {
    var actodeId = Session.get('selectedActode');
    var field = Session.get('editing');
    var element = document.getElementById(field);
    if (actodeId) {
      Actodes.update(actodeId, {$set: {[field]: element.value}});
      console.log('EXITO! id: ' + Session.get('selectedActode')+ 'CHECK AGAINST MONGODB: ' + element.value);
      Session.set('editing','');
      Session.set('dataState','saved');
    } else {
      console.log('NO OBJECT TO APPLY CHANGES....');
    }
  },
  'click [data-action=deleteSelectedActode]' : function() {
    console.log('DELETE ' + Session.get("selectedActode"));
    //var c = confirm('Vas a eliminar todos los datos de este cliente, estas seguro?');
    //if (c === true) {
      //Actodes.remove({_id : Session.get("selectedActode")});
      Router.go('/delete/' + Session.get("selectedActode"));
    //}
  },
});
