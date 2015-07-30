function LandingCtrl($location, $auth, user, shop) {
	var self = this;
	
	//service
	self.location = $location;
	self.auth = $auth;
	self.user = user;
	self.shop = shop;

	//user service forms
	self.loginForm = {};
	self.shopperForm = {};
	self.shopkeeperForm = {};

	//dependencies
	self.shop.getShops().then(function (data) {
		self.shops = data;
	})
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
	this.location.path('/dashboard');
};