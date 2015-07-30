function ShopDashboardCtrl($location, shop) {
	
	var self = this;

	//services
	self.location = $location;
	self.shop = shop;
	
	//forms for requests
	self.shopForm = {};
	self.productForm = {};

	//dependencies
	self.shop.getProducts().then(function (data) {
		self.products = data;
	})


}

angular.module('setUpShopApp').controller('shopDashboardCtrl', ShopDashboardCtrl);

ShopDashboardCtrl.prototype.createShop = function() {
	this.shop.shopForm = this.shopForm;
	this.shop.createShop();
	this.location.path('/dashboard');
};

ShopDashboardCtrl.prototype.addProduct = function() {
	
	var self = this;

	self.shop.productForm = this.productForm;
	self.shop.addProduct();
	self.location.path('/dashboard');

};

ShopDashboardCtrl.prototype.removeProduct = function(id) {
	var self = this;
	self.shop.removeProduct(id);
	self.location.path('/dashboard');
};
