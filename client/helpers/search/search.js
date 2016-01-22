Template.registerHelper("inputAttributes", function(){
    return{ 'data-action':'test-enter','id':'search-input','class': 'form-control', 'placeholder': "'Maria','29984695','Lopez' " };
});

Template.registerHelper("actodes", function(argument){
  return Actodes.find({}, { sort: { name: 1} });
});
Template.registerHelper("oneFound", function(argument){
  if (ActodesIndex.getComponentDict().get('count') == 1) {
    return true;
  }
});
Template.registerHelper("ActodesIndex", function(argument){
    return ActodesIndex;
});
Template.registerHelper("currentUser", function(argument){
  return Accounts.userId();
});
Template.registerHelper("resultsCount", function(argument){
  return ActodesIndex.getComponentDict().get('count');
});
