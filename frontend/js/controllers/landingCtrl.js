function LandingCtrl($location, $auth, user) {
	this.location = $location;
	this.auth = $auth;
	this.user = user;
	this.loginForm = {};
}

angular.module('setUpShopApp').controller('landingCtrl', LandingCtrl);

LandingCtrl.prototype.login = function() {
	this.user.loginForm = this.loginForm;
	this.user.login();
	this.location.path('/landing');
};