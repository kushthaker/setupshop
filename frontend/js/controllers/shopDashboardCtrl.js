function ShopDashboardCtrl($location, shop) {
	
	//services
	this.location = $location;
	this.shop = shop;
	
	//forms for requests
	this.shopForm = {};
}

angular.module('setUpShopApp').controller('shopDashboardCtrl', ShopDashboardCtrl);

ShopDashboardCtrl.prototype.createShop = function() {
	this.shop.shopForm = this.shopForm;
	this.shop.createShop();
	this.location.path('/dashboard');
};

//index.html add js