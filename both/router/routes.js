//styler
Router.route('/', {
  name: 'home'
});

Router.route('/search', {
  name: 'search',
  controller: 'SearchController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'newActode', 'search','editActode']
});

Router.route('/new-actode', {
  name: 'newActode',
  controller: 'NewActodeController'
});

Router.route('/actodes/:someParameter', {
    data: function(){
        console.log(this.params.someParameter);
    }
});

Router.route('/profiles/:_id', {
    name: 'profile',
    data: function(){
        return Actodes.findOne({_id: this.params._id});
    }
});
