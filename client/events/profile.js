Template.profile.events({
  'click #sling': function() {
    var uploader = new Slingshot.Upload("myFileUploads");

  uploader.send(document.getElementById('foto').files[0], function (error, downloadUrl) {
    if (error) {
      // Log service detailed response
      console.error('Error uploading', uploader.xhr.response);
      alert (error);
    }
    else {
      Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});
    }
  });
  }
})
