function ShopDashboardCtrl($location, shop) {
	
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
	this.shop.productForm = this.productForm;
	this.shop.addProduct();
	this.location.path('/dashboard');
};