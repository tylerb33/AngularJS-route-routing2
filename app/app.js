"use strict";

const app = angular.module("RouteApp", ["ngRoute"]);

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: ''
	})
	.when('/route1', {
		templateUrl: 'partials/routes.html',
		controller: 'route1Ctrl'
	})
	.when('/route2', {
		templateUrl: 'partials/routes.html',
		controller: 'route2Ctrl'
	})
	.otherwise('/');
});