'use strict';

var ngLunchit = {};

var app = angular.module('ngLunchit', [
    'ngLunchit.filters',
    'ngLunchit.directives',
    'ngLunchit.controllers',
    'ngLunchit.services'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl : 'view/page/dashboard.html'
        });
        $routeProvider.when('/menu', {
            templateUrl : 'view/page/menu.html'
        });
        $routeProvider.when('/billing', {
            templateUrl : 'view/page/billing.html'
        });
        $routeProvider.when('/providers', {
            templateUrl : 'view/page/providers.html'
        });
        $routeProvider.when('/settings', {
            templateUrl : 'view/page/settings.html'
        });

        $routeProvider.otherwise({
            redirectTo : '/'
        });
    }]);

app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);

app.run(['$rootScope','$location', function($rootScope, $location){

    }]);