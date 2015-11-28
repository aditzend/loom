//styler
Actodes = new Mongo.Collection('actodes');

/*
Actodes.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "nombre",
    max: 20
  },
  gender: {
    type: Boolean,
    label: "Genero",
    autoform: {

        type: "boolean-radios",
        trueLabel: 'hombre',
        falseLabel: 'mujer',
        value:false

    }
  }
}));

/*
Actodes.attachSchema(new SimpleSchema({
  cid: {
    type: String,
    label: 'dni',
    max: 8,
    autoform: {
      atFieldInput: {
        type: "hidden"
      }
    }
  },
  name: {
    type: String,
    label: 'nombre'
  },
  lastName: {
    type: String,
    label: 'apellido'
  },
  gender: {
    type: Boolean,
    label: 'sexo',
    autoform: {
      type: "boolean-radios",
      trueLabel: 'hombre',
      falseLabel: 'mujer',
      value:false
    }
  },
  email: {
    type: String,
    label: 'mail',
    autoform: {
      atFieldInput: {
        type: "email"
      }
    }
  },
  mobile: {
    type: Number,
    optional: true,
    autoform: {
      atFieldInput: {
        type: 'tel'
      }
    }
  },
  bdate: {
    type: "Date",
    label: "fecha de nacimiento"
  }
}));
*/
