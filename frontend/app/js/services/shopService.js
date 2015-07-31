function ShopService($http) {

	this.http = $http;

	this.shopForm = {};
	this.productForm = {};
	this.orderForm = {};

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

ShopService.prototype.removeProduct = function(id) {
	var self = this;
return self.http.delete(BASE_URL + DEL_PRODUCTS + id)
	.then(function(resp) {
		console.log("successful product deletion", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("unsuccessful product deletion", resp)
		return resp.data;
	});
};

ShopService.prototype.getProducts = function() {

	var self = this;

	return self.http.get(BASE_URL + PRODUCTS)
	.then(function(resp) {
		console.log("successful products retrieval", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("unsuccessful products retrieval", resp)
		return resp.data;
	});

};

ShopService.prototype.getShops = function() {

	var self = this;

	return self.http.get(BASE_URL + SHOPS)
	.then(function(resp) {
		console.log("successful shops retrieval", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("unsuccessful shops retrieval", resp)
		return resp.data;
	});

};

ShopService.prototype.sendOrder = function() {

	var self = this;

	return self.http.post(BASE_URL + ORDERS, self.orderForm)
	.then(function(resp) {
		console.log("order successful", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("order not successful", resp)
		return resp.data;
	});

};


