Template.displayCompany.onCreated(function() {
  //var currCompany = Session.get("CURR_COMPANY_ID");
  //this.subscribe("currCompany", currCompany);
  /*Template.data = function() {
    return Actodes.find({_id:currCompany})
  };*/
  });
Template.displayPlace.helpers({
  place: function() {
    return Places.find({_id:Session.get('CURR_PLACE_ID')});
  }
  });
