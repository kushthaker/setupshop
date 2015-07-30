function ShopDashboardCtrl($location, shop, products) {
	
	//dependencies
	this.products = products;

	//services
	this.location = $location;
	this.shop = shop;
	
	//forms for requests
	this.shopForm = {};
	this.productForm = {};
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
