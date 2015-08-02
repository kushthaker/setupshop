function ShopsCtrl($location, $auth, user, shop) {
	var self = this;

	//service
	self.location = $location;
	self.auth = $auth;
	self.user = user;
	self.shop = shop;

	//shop service form
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

angular.module('setUpShopApp').controller('shopsCtrl', ShopsCtrl);

ShopsCtrl.prototype.clearCart = function() {
	this.shoppingCart = [];
	var shopping_cart = JSON.stringify(this.shoppingCart);
	sessionStorage.setItem('cart', shopping_cart);

};

ShopsCtrl.prototype.addToCart = function(product) {
	this.shoppingCart.push(product);
	var shopping_cart = JSON.stringify(this.shoppingCart);
	sessionStorage.setItem('cart', shopping_cart);
};

ShopsCtrl.prototype.removeFromCart = function(product) {
	var self = this;
	
	var id = -1;

	for(index in self.shoppingCart){
		if(self.shoppingCart[index].id == product.id){
			id=index;
		}
	}

	if (id !== -1) {
		self.shoppingCart.splice(id, 1);
	}

	var shopping_cart = JSON.stringify(self.shoppingCart);
	sessionStorage.setItem('cart', shopping_cart);
};

ShopsCtrl.prototype.sendOrder = function() {
	this.shop.orderForm = JSON.stringify(this.shoppingCart);
	this.shop.sendOrder();
	this.location.path('/welcome');
}
