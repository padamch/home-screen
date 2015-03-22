"use strict";
var app = angular.module('ngHomescreen', ['ngRoute','ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'pages/index.html',
		controller:'IndexCtrl'
	})
	.when('/appstore',{
		templateUrl:'pages/appstore.html',
		controller:'AppstoreCtrl'
	})
	.otherwise({ redirectTo: '/' });
}]);