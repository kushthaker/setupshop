function UserService($auth) {

	this.auth = $auth;
	this.registrationForm = {};
	this.loginForm = {};

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