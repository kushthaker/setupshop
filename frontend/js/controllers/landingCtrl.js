function LandingCtrl($location, $auth, user) {
	this.location = $location;
	this.auth = $auth;
	this.user = user;
	this.loginForm = {};
	this.shopperForm = {};
	this.shopkeeperForm = {};
}

angular.module('setUpShopApp').controller('landingCtrl', LandingCtrl);

LandingCtrl.prototype.login = function() {
	this.user.loginForm = this.loginForm;
	this.user.login();
	this.location.path('/landing');
};

LandingCtrl.prototype.registerShopper = function() {
	this.user.shopperForm = this.shopperForm;
	this.user.registerShopper();
	this.location.path('/landing');
};

LandingCtrl.prototype.registerShopkeeper = function() {
	this.user.shopkeeperForm = this.shopkeeperForm;
	this.user.registerShopkeeper();
	this.location.path('/landing');
};