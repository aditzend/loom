Template.profile.helpers({
  isMan: function(g) {
      if (g === 'M') {
        return true;
      }
    },
    customerSince: function(c) {
      var created = moment(c);
      return created.fromNow();
    },
    age: function(b) {
      var bDate = moment(b,"YYYY-MM-DD");
      var now = moment();
      //return  now.add(1,'year').diff(bDate,'years');
      return  now.diff(bDate,'years');
    },
    newAge:function(b) {
      var bDate = moment(b,"YYYY-MM-DD");
      var now = moment();
      return  now.add(1,'year').diff(bDate,'years');
      //return  now.diff(bDate,'years');
    },

    isToday: function(birthStr) {
      var now = moment();
      var cuttedStr = birthStr.substring(4,10);
      var bDayStr = now.format("YYYY") + cuttedStr;
      var bDay = moment(bDayStr,"YYYY-MM-DD");

      if (bDay.isSame(now,'day')){
        return true;
      }else{
        return false;
      }
    },
    calcNearest: function(birthStr) {
      //var now = moment();
      var cuttedStr = birthStr.substring(4,10);
      var bDayStr = moment().format("YYYY") + cuttedStr;
      var actualYear = Number(moment().format("YYYY"));
      var prevBDayStr = ( actualYear - 1 ) + cuttedStr;
      var nextBDayStr = ( actualYear + 1 ) + cuttedStr;
      var actualBDay = moment(bDayStr,"YYYY-MM-DD");
      var prevBDay = moment(prevBDayStr, "YYYY-MM-DD");
      var nextBDay = moment(nextBDayStr,"YYYY-MM-DD");
      var bDay = actualBDay;//the birthday we are comparing to
      var imIn = 0;

      if (moment().format('MM') < 7){
        //we are between JAN and JUN
        if ( Math.abs(moment().diff(prevBDay,'days')) < Math.abs(moment().diff(actualBDay,'days')) ){
          bDay = prevBDay;//compare against last year's birthday
          imIn = 1;
        }else{
          bDay = actualBDay;//compare against this year's birthday
          imIn = 2;
        }
      }else{
        //we are between JUL and DEC
        if ( Math.abs(moment().diff(nextBDay,'days')) < Math.abs(moment().diff(actualBDay,'days')) ) {
          bDay = nextBDay;//compare against next year's birthday
          imIn = 3;
        }else{
          bDay = actualBDay;//compare against this year's birthday
          imIn = 4;
        }
      }
      //return bDay;
      Session.set('nearestBDay', bDay.format("YYYY-MM-DD"));

      //return imIn + " " + Math.abs(moment().diff(nextBDay,'days')) + " dias " + Math.abs(moment().diff(actualBDay,'days')) + " dias "  + bDay.format('DDMMM YYYY');
      //return "actual : " + actualBDay.format("DD/MM/YYYY") + " prev : " + prevBDay.format("DD/MM/YYYY") + " next : " + nextBDay.format("DD/MM/YYYY");
      //return "actual emparchado para el orr... : " + actualBDay.format("DD/MM/YYYY")+ " " + actualBDay.add(1,'year').add(1,'year').diff(now,'days') + " dias , "+ " prev : " + prevBDay.format("DD/MM/YYYY") + " " + prevBDay.add(1,'year').add(1,'year').diff(now,'months') + " meses , " + " next : " + nextBDay.format("DD/MM/YYYY") + " " + nextBDay.add(1,'year').add(1,'year').diff(now,'weeks') + " semanas ";
    },
    whatDiff: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      return bDay.diff(moment(),'days');
    },
    bDayClose: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      if ( bDay.diff(moment(),'days') == 6 ) {
        return bDay.format('[el ] dddd D');
      }else{
        return  bDay.calendar(null, {
                  sameDay: '[hoy]',
                  nextDay: '[en dos dias]',
                  nextWeek: '[el ]dddd',
                  lastDay: '[ayer]',
                  lastWeek: '[el ] dddd',
                });
      }
    },
    bDayPlain: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      //return bDay.format('DDMMM YY HH:mm:ss') + " faltan " + bDay.diff(moment(),'days') + "   .";
      return bDay.format('D MMM');
    },
    bDayLong: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      return bDay.format('[el ] dddd, D [de] MMMM');
    },
    isTomorrow: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      if( bDay.diff(moment(),'hours') < 24 && bDay.diff(moment(),'hours') > 0) {
        return true;
      }else{
        return false;
      }
    },
    hasPassed: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");

      if ( bDay.isBefore(moment()) ) {
        return true;
      }else{
        return false;
      }
    },
    inLessThanAWeek: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      if ( bDay.diff(moment(),'weeks') < 1 ) {
        return true;
      }else{
        return false;
      }
    },
    inLessThanAMonth: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      if ( bDay.diff(moment(),'month') < 1 ) {
        return true;
      }else{
        return false;
      }
    },
    wasYesterday: function() {
      if ( (moment().format( 'DD') - 1) == bDay.format( 'DD') ) {
        return true;
      }else{
        return false;
      }
    },
    moreThanAWeekAgo: function() {
      var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
      if ( moment().diff(bDay,'days') > 6 ) {
        return true;
      }else{
        return false;
      }
    },
    isInEditMode: function(id) {
      var result = (Session.get('editing') === id) ? true:false;
      return result;
    }
});
