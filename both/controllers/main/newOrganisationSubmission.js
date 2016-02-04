AppController.events({'submit [data-action=newOrganisationSubmission]' : function(e) {
  e.preventDefault();
  var actodeType = e.target.actodeType.value;
  var country = e.target.country.value;
  var cid = e.target.cid.value;
  var cidType = e.target.cidType.value;;   // dni LE fb tw gl para cuentas tipo avatar
  var name = e.target.name.value;
  var email = e.target.email.value;
  var phone = e.target.phone.value;
  var author = Meteor.user()._id;



  //inserto doc en Actodes
  Actodes.insert({
    actodeType: actodeType,
    country: country,
    cid: cid,
    cidType: cidType,
    name: name,
    email: email,
    phone: phone,
    author: author,
    createdAt: moment().toDate()
  });

  console.log('ingreso ok : ' + name);
  Router.go('/profiles/' + this._id);
}
});
