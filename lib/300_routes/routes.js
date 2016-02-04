//google-places-input

console.log('[COMMON] Loading routes.js ...');

Router._filters = {
  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css('min-height', 0);
  }
};
var filters = Router._filters;



Router.map(function () {
  this.route('list', {
    path: '/list',
    controller: 'ListController'
  });
  this.route('address', {
    path: '/address/:id',
    controller: 'AddressController'
  });
});

//google-places-input

Router.route("/new-customer", {
  name:"routeNewCustomer",
  controller:"NewCustomerController",
});

Router.route("dashboard/", function () {
if (!Meteor.user().hasCustomizedDashboard) {
  templateStr = 'generalDashboard';
}else{
  templateStr = 'dashboard' + '-' + Meteor.user()._id;
}

this.render(templateStr);

}, {
  name: 'dashboard',
  controller: 'DashboardController'
});


Router.route('/',  {
  name: 'home',
  template: 'home'

});

Router.route('/search', {
  name: 'search',
  controller: 'SearchController'
});

Router.route('/new-actrel', {
  name: 'newActRel',
  template: 'newActRel',
  controller: 'NewActRelController'
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
