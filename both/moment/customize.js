moment.locale('es', {

});/*
var todayStr = "2015-06-30";
var bDayStr = "01-02";
var today = moment(todayStr, 'YYYY-MM-DD');




/*
//console.log(today);
var bDay = moment(bDayStr, 'MM-DD');
console.log('diff  ' + bDay.diff(today, 'days') + ' days or ' + today.diff(bDay,'days') );

//console.log(whenIsBirthDay("1982 12 17"));

var now = moment();
//console.log('ahora :' + now.toDate() );
var birth = moment("1982 12 02","YYYY MM DD");
//console.log('birth :' + birth.toDate());
//console.log(moment(birth).format('D'));
var edad = now.diff(birth, 'years');
//var fecha = moment().format('D MM');
//console.log('Tiene ' + edad );
//console.log('fecha: ' + fecha);

var actualBday = moment("" + moment().format('YYYY') + " 11 17", "YYYY MM DD");
var nextBday = moment("" + moment().add(1,'year').format('YYYY') + " 11 18", "YYYY MM DD");

if ( moment(actualBday).isBefore(moment(), 'day') ) {
  var passed = true;
  //console.log('Cumplio ' +  now.to(actualBday) );
} else {
  if ( moment(actualBday).isAfter(moment(), 'day') ){
    var passed = false;
    //console.log(' todavia no cumplio');
  } else {
    //console.log('no se q pasa');
  }
}


if ( nextBday.diff(now, 'hours') < 24 && nextBday.diff(now, 'hours') > 0) {
  //console.log('faltan ' + nextBday.diff(now, 'hours') + ' horas para el cumple' );
} else {
  if ( nextBday.diff(now, 'hours') < 0 && nextBday.diff(now, 'months') > -6 ) {
    //console.log('cumplio ' + moment(nextBday).fromNow() );
  } else {
    if ( nextBday.diff(now, 'hours') < 0 ) {
    //  console.log('cumplio ' + moment(nextBday).fromNow() );
    } else {
    //  console.log('cumple  el ' + moment(nextBday).format("D MMMM[, cae ]dddd") );
    }
  }
}


  //console.log('faltan ' + nextBday.diff(now, 'days') + ' dias para su cumple');
*/
