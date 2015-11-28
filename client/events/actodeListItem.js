Template.actodeListItem.events ({
  'click': function () {
    Session.set("selectedActode", this._id);
    console.log(Session.get("selectedActode"));
  }
})
