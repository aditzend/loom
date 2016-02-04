console.log('[CLIENT] views/new/place/newPlace.js  ...');

Meteor.subscribe('places');

Meteor.startup(function() {
  GoogleMaps.load({
    libraries: 'places'
  });
});

Template.newPlace.onCreated( function() {
  console.log("newPlace tpl created");
  Places.attachSchema(Schema.Place, {replace:true});
  console.log("Schema.Place attached");

});

Template.newPlace.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.newPlace.events({
  "click #calandraButton": function() {
    //var res = Meteor.call("calandra");
    //console.log(res);
    obj1 = {
      name: 'jon',
      score: 0
    };
    obj2 ={
      name: 'maria',
      score: 0
    };
    //Meteor.apply("calandra", [obj1], {wait: true});
    storeId = _idCreator("0540",'1','1');
    console.log(storeId);

  }
});

var hooksObject = {
  after: {
    insert: function(error, result) {
      console.log('INSERTED OK : ' + result);
      Session.set('CURR_PLACE_ID', result);
      Session.set('STEP_COMPLETED', 'PLACE_CREATED');
      Session.set('SHOW_COMPLETED_TPL', 'displayPlace');

    }
  }
}


AutoForm.hooks({
  insertPlace: hooksObject
});
