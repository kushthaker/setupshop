function RegisterCtrl($location, $auth, user) {

	this.location = $location;
	this.auth = $auth;
	this.user = user;
	this.registrationForm = {};

}

angular.module('setUpShopApp').controller('registerCtrl', RegisterCtrl);

RegisterCtrl.prototype.register = function() {
	this.user.userRequest(this.registrationForm, USER_REG);
	this.location.path('/landing');
};