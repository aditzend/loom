Meteor.publish("relationships",
  function(owner){
    if (this.userId) {
      return Relationships.find({owner: owner});
    } else {
      this.ready();
    }
});
