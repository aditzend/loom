console.log("[COMMON] Loading testSchema.js ...");

if( Meteor.isClient ) {
  onEmptyStateFnt = function () {
    return {
      formattedAddress: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris',
      longitude: 2.2922926,
      latitude: 48.8583736,
      addressComponents: {country: {short_name: 'fr', long_name: 'France'}, locality: 'Paris', postal_code: '75007'}
    };
  };
}

Schema.Test = new SimpleSchema({
  address1: {
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input'
    }
  },
  address2: {
    type: Schema.Address,
    optional: true,
    autoform: {
      type: 'google-places-input',
      onEmptyStateFntName: 'onEmptyStateFnt'
    }
  },
  text: {
    type: String,
    optional: true
  }
});
Test.attachSchema(Schema.Test);
