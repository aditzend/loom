
Template.registerHelper("relationships", function(type){
  type = type.toString();
  return Relationships.find({type:  type});
});

Template.registerHelper("actodeName", function(destiny){
  return Actodes.findOne({idGlobal: destiny}).name;
});

Template.registerHelper("actodeLastName", function(destiny){
  return Actodes.findOne({idGlobal: destiny}).lastName;
});

Template.registerHelper("relatedActodeName", function(){
  ra = Meteor.user().relatedActode;
  //Session.get('relatedActode')
  return Actodes.find( {_id: ra })
    .map (
      function(actode){
        return actode.name;
      }
    );
  }
);

Template.registerHelper("hasCustomizedDashboard", function(){
  return Meteor.user().hasCustomizedDashboard;

});

Template.registerHelper("belongsToId", function(){
    relatedActodeId = Meteor.user().relatedActode;


    //esto es el id de la empresa, no de la persona relacionada al usuario


    return Actodes.find( {_id: relatedActodeId })
    .map (
      function(actode){
        return actode.belongsTo;
      }
    );


  }
);

Template.registerHelper("belongsTo", function(){
  relatedActodeId = Meteor.user().relatedActode;
  belongsToId = Actodes.find( {_id: relatedActodeId })
  .map (
    function(actode){
      return actode.belongsTo;
    }
  );
  //console.log(belongsToId[0]);

  //belongsToId = "'"+ belongsToId[0]+"'";

  //foo = JSON.stringify(belongsToId);
  //console.log( typeof(belongsToId) );
  //console.log(belongsToId.toString());
  //console.log(belongsToId.valueOf());


  //console.log(foo);

  //aux = '34dsomJC8Rp6PYJjG';

  belongsToName =   Actodes.findOne({_id: belongsToId.toString() }, { fields: {name:1} }).name;
  //console.log(belongsToName);

  return belongsToName;

});




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
Template.registerHelper("relatedActode", function(){
  return user.relatedActode;
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
Template.registerHelper("userCan", function(generalAction){

    //var specificAction = Session.get("country")+"-"+Session.get("org")+"--"+generalAction;

    //REMPLAZAR ESTO POR SETEOS ACTIVOS

    var specificAction = generalAction;

    console.log(specificAction + ' permission required');
    return Roles.userHasRole(Meteor.userId(), specificAction);



});
