NewActodeController = AppController.extend({
  layoutTemplate: 'appLayout'
});

NewActodeController.events({
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
  'click [data-action=newActodeGender]': function() {
    console.log('loc ');
  }
});
