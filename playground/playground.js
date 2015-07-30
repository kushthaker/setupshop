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

UserService.prototype.handleSuccess = function(resp, request) {
	console.log('successful' + request, resp);
	return resp.data;
};

UserService.prototype.handleFailure = function(resp, request) {
	console.log('unsuccessful' + request, resp);
	return resp.data;
};

UserService.prototype.deviseRequest = function(form, request) {
	var self = this;

	if (request === 'registration') {
		self.auth.submitRegistration(form)
		.then(handleSuccess(resp, request))
		.catch(handleFailure(resp, request));
	}
	else if (request === 'login') {
		self.auth.submitLogin(form)
		.then(handleSuccess(resp, request))
		.catch(handleFailure(resp, request));
	}
	else if (request === 'shopper registration') {
		return self.http.post(BASE_URL + SHOPPERS, {"shopper": form})		
		.then(handleSuccess(resp, request))
		.catch(handleFailure(resp, request));
	}
	else if (request === 'shopkeeper registration') {
		return self.http.post(BASE_URL + SHOPKEEPERS, {"shopkeeper": form})		
		.then(handleSuccess(resp, request))
		.catch(handleFailure(resp, request));
	}
	else
		throw 'invalid request';
};









