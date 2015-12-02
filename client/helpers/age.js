Template.registerHelper('age', function(b) {
  var bDate = moment(b,"YYYY-MM-DD");
  var now = moment();
  //return  now.add(1,'year').diff(bDate,'years');
  return  now.diff(bDate,'years');
});

Template.registerHelper('newAge', function(b) {
  var bDate = moment(b,"YYYY-MM-DD");
  var now = moment();
  return  now.add(1,'year').diff(bDate,'years');
});
