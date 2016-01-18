Meteor.publish("relationships",
  function(origin){
    if (this.userId) {
      return Relationships.find({origin: origin});
    } else {
      this.ready();
    }
});
