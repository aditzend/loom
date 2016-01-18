Meteor.publish("userData", function(){
  if(this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'relatedActode': 1, 'belongsTo': 1, 'hasCustomizedDashboard': 1} });
  } else {
    this.ready();
  }
});
