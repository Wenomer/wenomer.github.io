'use strict';

/* Controllers */

var controllers = angular.module('ngLunchit.controllers', []);

controllers.controller('HeaderCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.loginPopup = function(){
        alert('popup');
    }
}]);

controllers.controller('DashboardCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.week = [
        {date: '06/10/2013', status:1 ,order:[{user:{id: 1, name: 'Леша'}, dishes:3, amount: 15000}]},
        {date: '06/11/2013', status:0, order:[{user:{id: 1, name: 'Леша'}, dishes:3, amount: 15000}]},
        {date: '06/12/2013'},
        {date: '06/13/2013'},
        {date: '06/14/2013'},
        {date: '06/15/2013'},
        {date: '06/16/2013'}
    ];
}]);