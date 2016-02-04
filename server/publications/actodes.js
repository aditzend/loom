Meteor.publish('actodes',
 function() {
   if (this.userId) {
     return Actodes.find();
   } else {
     this.ready();
   }
});
Meteor.publish('currCompany',
 function(_id) {
   if (this.userId) {
     return Actodes.find({_id: _id});
   } else {
     this.ready();
   }
});
