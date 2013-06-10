'use strict';

/* Filters */

var filters = angular.module('ngLunchit.filters', []);

filters.filter('slice', function() {
    return function(arr, start, end) {
        return arr.slice(start, end);
    };
});