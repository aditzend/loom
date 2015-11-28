Template.search.helpers ({
  daysCreated: function(m){
    var days = moment(m).startOf('day').fromNow();
    //var today = m + 3;
    return days;
  },
  isMan: function(g) {
    if (g === 'M'){
      return true;
    } else {
      return false;
    }
  },
  

});
