console.log('[CLIENT] main.* wildcard - app.js  ...');

Meteor.subscribe('publishTest');

Template.registerHelper('activeIfTemplateIs', function (template) {
    var currentRoute = Router.current();
    return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
  }
);


Meteor.startup(function() {

  GoogleMaps.load({
    libraries: 'places'
  });
/*
  return SEO.config({
    title: 'Meteor app test',
    meta: {
      'description': 'Structure of a Meteor app minimal load '
    },
    og: {
      'image': 'http://www.bebegavroche.com/media/wysiwyg/mickey.jpg'
    }
  });
*/
});
