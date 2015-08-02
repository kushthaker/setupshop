function RegisterCtrl($location, user) {
	var self = this;

	//service
	self.location = $location;
	self.user = user;

	//user service forms
	self.loginForm = {};
	self.shopperForm = {};
	self.shopkeeperForm = {};



}

angular.module('setUpShopApp').controller('registerCtrl', RegisterCtrl);

RegisterCtrl.prototype.login = function() {
	this.user.loginForm = this.loginForm;
	this.user.login();
};

RegisterCtrl.prototype.registerShopper = function() {
	this.user.shopperForm = this.shopperForm;
	this.user.registerShopper();
};

RegisterCtrl.prototype.registerShopkeeper = function() {
	this.user.shopkeeperForm = this.shopkeeperForm;
	this.user.registerShopkeeper();
};