Template.registerHelper('daysCreated', function(m) {
  var days = moment(m).startOf('day').fromNow();
  //var today = m + 3;
  return days;
});

Template.registerHelper('userPrimaryEmail', function(){
  if (Meteor.userId() ) {
    return Meteor.users.findOne({_id: Meteor.userId()}).emails[0].address;
  } else {
    return 'no log';
  }
});

Template.registerHelper('isInEditMode', function(id) {
  var result = (Session.get('editing') === id) ? true:false;
  return result;
});
Template.registerHelper("isDataState", function(state){
  return (Session.get('dataState') === state) ? true:false;
});

Template.registerHelper('customerSince', function(c) {
  var created = moment(c);
  return created.fromNow();
});

Template.registerHelper('headerMessage', function() {
  return Session.get('headerMessage');
});


Template.registerHelper("formatArg", function(date){
  return moment(date).format("DD. MMMM YYYY");
});
Template.registerHelper("myUserId", function(){
  return Meteor.userId();
});
