NewActodeController = AppController.extend({
  layoutTemplate: 'appLayout'
});

NewActodeController.events({

  'click [data-action=newActodeGender]': function() {
    console.log('loc ');
  }
});
