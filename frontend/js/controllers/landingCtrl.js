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
	self.orderForm = {};

	//dependencies
	self.shop.getShops().then(function (data) {
		self.shops = data;
	})

	//shopping cart
	if (sessionStorage.getItem('cart') === null) {
		self.shoppingCart = [];
	}
	else {
		self.shoppingCart = JSON.parse(sessionStorage.getItem('cart'));
	}
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

LandingCtrl.prototype.addToCart = function(product) {
	this.shoppingCart.push(product);
	var shopping_cart = JSON.stringify(this.shoppingCart);
	sessionStorage.setItem('cart', shopping_cart);
};

LandingCtrl.prototype.removeFromCart = function(product) {
	var self = this;

	var i = self.shoppingCart.indexOf('product.id');
	self.shoppingCart.splice(i, 1);

	var shopping_cart = JSON.stringify(self.shoppingCart);
	sessionStorage.setItem('cart', shopping_cart);
};

LandingCtrl.prototype.sendOrder = function() {
	this.shop.orderForm = JSON.stringify(this.shoppingCart);
	this.shop.sendOrder();
	this.location.path('/welcome');
}
