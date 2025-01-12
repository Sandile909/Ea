var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
$routeProvider
.when('/home', {
templateUrl: 'home.html'
})
.when('/sign', {
templateUrl: 'sign.html'
})
.otherwise({
redirectTo: '/home'
})
}]);

app.controller('MainCtrl', ['$scope', '$location', '$http', function($scope, $location, $http){

$scope.showSignupForm = false;
$scope.showLoginForm = false;

$scope.loginCheckBoxLabel = function(){
var loginCheckBox = document.querySelector('.loginCheckBox');
var signupCheckBox = document.querySelector('.signupCheckBox');
if(loginCheckBox.checked){
signupCheckBox.checked = false;
$scope.showSignupForm = false;
$scope.showLoginForm = true;
}else{
$scope.showSignupForm = false;
$scope.showLoginForm = false;
}
}

$scope.signupCheckBoxLabel = function(){
var loginCheckBox = document.querySelector('.loginCheckBox');
var signupCheckBox = document.querySelector('.signupCheckBox');
if(signupCheckBox.checked){
loginCheckBox.checked = false;
$scope.showSignupForm = true;
$scope.showLoginForm = false;
}else{
$scope.showSignupForm = false;
$scope.showLoginForm = false;
}
}

}]);