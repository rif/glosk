'use strict';

/* Controllers */

angular.module('glosk.controllers', []).
    controller('MyCtrl1', ['$scope', 'navSvc', function ($scope, navSvc) {
        $scope.slidePage = function (path, type) {
            navSvc.slidePage(path, type);
        };
    }])
    .controller('MyCtrl2', ['$scope', 'navSvc',function ($scope, navSvc) {
        $scope.slidePage = function (path, type) {
            navSvc.slidePage(path, type);
        };
    }]);