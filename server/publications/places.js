Meteor.publish('places',
 function() {
   if (this.userId) {
     return Places.find();
   } else {
     this.ready();
   }
});
