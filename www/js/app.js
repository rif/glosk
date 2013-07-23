'use strict';


// Declare app level module which depends on filters, and services
var glosk = angular.module('glosk', ['glosk.filters', 'glosk.services', 'glosk.directives', 'ajoslin.mobile-navigate', 'ngMobile']).
    config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/contacts', {templateUrl: 'partials/contactsView.html'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
