function ShopService($http) {

	this.http = $http;

	this.shopForm = {};
	this.productForm = {};

}

angular.module('setUpShopApp').service('shop', ShopService);

ShopService.prototype.createShop = function() {

	var self = this;

	return self.http.post(BASE_URL + SHOPS, {"shop": self.shopForm})
	.then(function(resp) {
		console.log("successful shop registration", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("unsuccessful shop registration", resp)
		return resp.data;
	});

};

ShopService.prototype.addProduct = function() {

	var self = this;

	return self.http.post(BASE_URL + PRODUCTS, {"product": self.productForm})
	.then(function(resp) {
		console.log("successful product registration", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("unsuccessful product registration", resp)
		return resp.data;
	});

};