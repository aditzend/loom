ActodesIndex = new EasySearch.Index({
  engine: new EasySearch.Minimongo({
    sort: function () {
      return { createdAt: -1 };
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
        categoryFilter = options.search.props.categoryFilter;

      if (_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
        selector.category = categoryFilter;
      }

      return selector;
    }
  }),
  collection: Actodes,
  fields: ['name','lastName', 'cid'],
  defaultSearchOptions: {
    limit: 3
  },
  permission: () => {
    //console.log(Meteor.userId());

    return true;
  }
});


RelationshipsIndex = new EasySearch.Index({
  engine: new EasySearch.Minimongo({
    sort: function () {
      return { createdAt: -1 };
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
        categoryFilter = options.search.props.categoryFilter;

      if (_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
        selector.category = categoryFilter;
      }

      return selector;
    }
  }),
  collection: Relationships,
  fields: ['cid'],
  defaultSearchOptions: {
    limit: 8
  },
  permission: () => {
    //console.log(Meteor.userId());

    return true;
  }
});
