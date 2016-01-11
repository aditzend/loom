Meteor.publish('actodes',
 function() {
   if (this.userId) {
     return Actodes.find();
   } else {
     this.ready();
   }
});
//{author: this.userId},
