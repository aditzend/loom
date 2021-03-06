console.log("[COMMON] Loading newActRelController.js ...");
NewActRelController = AppController.extend({


  onAfterAction: function() {
    Meta.setTitle('Crear Perfil'),
    

    this.render('newPerson' , {to: 'actodeForm'});
  },
  layoutTemplate: 'appLayout',

});

NewActRelController.events({
  'click [data-action=renderSubTemplate]' : function(e) {
    console.log(e.target.id);
    //Session.set('selectedTemplate', e.target.id);
    //if (e.target.id == 'newPerson') {
    //  Actodes.attachSchema(Schema.Person, {replace:true});
      //console.log("changing schema to Person");

  //  }

    this.render(e.target.id , {to: 'actodeForm'});
  },
  'keypress [data-action=test-enter]' : function(e) {
    if (e.keyCode == 13) {
      //console.log(e.keyCode);
      getName(e.target.value);
      document.getElementById('name').value=getName(e.target.value);
      document.getElementById('lastName').value=getLastName(e.target.value);
      //console.log(e.target.value);
    }


  },
  'submit [data-action=insertActodeAndRelationship]' : function(e) {
    e.preventDefault();
    // create the global id of the Actode
    var country = '0540'; // country code according to protocol, should not be hardcoded in the future
    var cidType = e.target.cidType.value;
    var cid = e.target.cid.value;
    var idGlobal = country + '-' + cidType + '-' + cid;

    // hidden information
    var author = Meteor.user()._id;
    var userBelongsTo = Meteor.user().belongsTo;


    // to store to Actodes
    var name = e.target.name.value;
    var lastName = e.target.lastName.value;
    var bdate = e.target.bdate.value; // birth date

    var gender = e.target.gender.value;

    // to tore to Relationships
    var relType = e.target.relType.value;
    var email = e.target.email.value;
    var mobile = e.target.mobile.value;


    //console.log(author + ' ' + moment().toDate() );

    Actodes.insert({
      idGlobal: idGlobal,
      name: name,
      lastName: lastName,
      gender: gender,
      bdate: bdate,
      author: author,
      origin: userBelongsTo,
      createdAt: moment().toDate()
    });
    Relationships.insert({
      origin: userBelongsTo,
      destiny: idGlobal,
      author: author,
      type: relType,
      email: email,
      mobile: mobile,


      createdAt: moment().toDate()
    });
//Relationships.insert({cid: '0540-29984695', cidType: 'DNI' , relationshipType: 'CONSULTANT', owner: '34dsomJC8Rp6PYJjG' })
    console.log('ingreso ok');
    Router.go('/');
  }
});
