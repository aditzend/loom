Meteor.publish('publishTest',
 function() {
   if (this.userId) {
     return Test.find();
   } else {
     this.ready();
   }
});
//{author: this.userId},
