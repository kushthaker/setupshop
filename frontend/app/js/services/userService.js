function UserService($auth, $http) {

	// services
	this.auth = $auth;
	this.http = $http;

	// devise-token-auth forms
	this.registrationForm = {};
	this.loginForm = {};
	this.shopperForm = {};
	this.shopkeeperForm = {};

}

angular.module('setUpShopApp').service('user', UserService);

UserService.prototype.login = function() {
	var self = this;
	self.auth.submitLogin(self.loginForm)
	.then(function(resp) {
		console.log('successful login', resp);
		})
	.catch(function(resp) {
		console.log('unsuccessful login', resp);
	});
};

UserService.prototype.register = function() {
	var self = this;
	self.auth.submitRegistration(self.registrationForm)
	.then(function(resp) {
		console.log('successful registration', resp);
      })
	.catch(function(resp) {
        console.log('unsuccessful registration', resp);
      });
};


UserService.prototype.registerShopper = function() {

	var self = this;

	return self.http.post(BASE_URL + SHOPPERS, {"shopper": self.shopperForm})
	.then(function(resp) {
		console.log("successful shopper registration", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("unsuccessful shopper registration", resp)
		return resp.data;
	});

};

UserService.prototype.registerShopkeeper = function() {

	var self = this;

	return self.http.post(BASE_URL + SHOPKEEPERS, {"shopkeeper": self.shopkeeperForm})
	.then(function(resp) {
		console.log("successful shopkeeper registration", resp)
		return resp.data;
	})
	.catch(function(resp) {
		console.log("unsuccessful shopkeeper registration", resp)
		return resp.data;
	});

};




