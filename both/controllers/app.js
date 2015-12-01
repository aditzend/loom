AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
    //console.log("logout");
  },
  'submit [data-action=newActodeSubmission]' : function(e) {
    e.preventDefault();
    var country = '0540'; // codigo en protocolo CONEC de Argentina
    var cid = e.target.cid.value;
    var cidType = 'DNI';   // dni LE fb tw gl para cuentas tipo avatar
    var name = e.target.name.value;
    var lastName = e.target.lastName.value;
    var email = e.target.email.value;
    var mobile = e.target.mobile.value;
    var gender = e.target.gender.value;
    var bdate = e.target.bdate.value; // fecha de cumpleanios
    var author = Meteor.user()._id;

    console.log(author + ' ' + moment().toDate() );
    console.log(' gender: ' + gender);
    //inserto doc en Actodes
    Actodes.insert({
      country: country,
      cid: cid,
      cidType: cidType,
      name: name,
      lastName: lastName,
      email: email,
      mobile: mobile,
      gender: gender,
      bdate: bdate,
      author: author,
      createdAt: moment().toDate()
    });

    console.log('ingreso ok');
    Router.go('/');
  },
  'click [data-action=update]': function() {

    var actodeId = Session.get('selectedActode');
    var field = Session.get('editing');
    var element = document.getElementById(field);
    if (actodeId) {
      Actodes.update(actodeId, {$set: {[field]: element.value}});
      console.log('EXITO! id: ' + Session.get('selectedActode')+ 'checkear contra mongol: ' + element.value);
      Session.set('editing','');
    } else {
      console.log('no se a quien....');
    }


  },
  'click [data-action=editable]': function(e) {

    Session.set("editing",e.target.id);

  }

});
