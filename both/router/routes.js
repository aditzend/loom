
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
Router.route('/new-Organisation', {
  name: 'newOrganisation',
  //controller: 'NewActodeController'
});
Router.route('/deleteConfirmed', {
  name: 'deleteConfirmed'
});

Router.route('/actodes/:someParameter', {
    data: function(){
        console.log(this.params.someParameter);
    }
});

Router.route('/profiles/:_id', {
    name: 'profile',
    controller: 'ProfileController',
    data: function(){
        return Actodes.findOne({_id: this.params._id});
    }
});

Router.route('/delete/:_id', {
  name: 'delete',
  controller: 'DeleteActodeController',
});

Router.route("userdashboard", {
  name:"userdashboard",
  controller:"UserDashboardController"


});
