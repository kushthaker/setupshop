var app = angular.module('setUpShopApp', ['ngRoute', 'ng-token-auth', 'ui.bootstrap']);

app.config(function($authProvider) {
	$authProvider.configure({
		apiUrl: 'http://localhost:3000',
	});
});

app.config(function($routeProvider) {
	$routeProvider
	.when('/shops', {
		templateUrl: '../templates/shops.html',
		controller: 'shopsCtrl as ctrl'
	})
	.when('/landing', {
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
	})
	.otherwise({
		redirectTo: '/landing',
	})
});