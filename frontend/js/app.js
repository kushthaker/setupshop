var app = angular.module('setUpShopApp', ['ngRoute', 'ng-token-auth', 'ui.bootstrap']);

app.config(function($authProvider) {
	$authProvider.configure({
		apiUrl: 'http://localhost:3000',
	});
});

app.config(function($routeProvider) {
	$routeProvider
	.when('/welcome', {
		templateUrl: '../templates/landing.html',
		controller: 'landingCtrl as ctrl'
	})
	.when('/register', {
		templateUrl: '../templates/register.html',
		controller: 'registerCtrl as ctrl'
	})
	.when('/dashboard', {
		templateUrl: '../templates/shop-dashboard.html',
		controller: 'shopDashboardCtrl as ctrl',
		resolve: {
			products: function($location, shop){
				return shop.getProducts()
				.catch(function (response) {
					$location.path('/welcome')
				})
			}
		}
	})
	.otherwise({
		redirectTo: '/welcome',
	})
});