'use strict';


// Declare app level module which depends on filters, and services
var glosk = angular.module('glosk', ['glosk.filters', 'glosk.services', 'glosk.directives', 'glosk.controllers', 'ajoslin.mobile-navigate', 'ngMobile']).
    config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
