console.log('[COMMON] Loading list.js ...');


Template.list.events({
  'submit form': function (event) {
    console.log('form submitted');
    console.log($('#formInsert'));
    event.preventDefault();
    return false;
  }
});










AutoForm.hooks({
  formInsert: {
    formToDoc: function (doc) {
      console.log('form Insert: formToDoc', doc);
      return doc;
    },
    docToForm: function (doc) {
      console.log('formInsert: docToForm', doc);
      return doc;
    }
  }
});
