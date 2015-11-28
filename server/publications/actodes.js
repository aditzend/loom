Meteor.publish('actodes',
 function() {
   if (this.userId) {
     return Actodes.find( {author: this.userId});
   } else {
     this.ready();
   }
});
//{author: this.userId},
