'use strict';

/* Controllers */

angular.module('glosk.controllers', []).
    controller('HomeCtrl', ['$scope', 'navSvc', '$rootScope', function ($scope, navSvc, $rootScope) {
        $rootScope.slidePage = function (path, type) {
            navSvc.slidePage(path, type);
        };
        $rootScope.back = function () {
            navSvc.back();
        };
    }]).
    controller('ContactsCtrl', ['$scope', function ($scope) {
        $scope.find = function () {
            $scope.contacts = [];
            alert('contacts');
            var options = new ContactFindOptions();
            //options.filter=""; //returns all results
            options.filter = $scope.searchTxt;
            options.multiple = true;
            var fields = ["displayName", "name", "phoneNumbers"];
            navigator.contacts.find(fields, function (contacts) {
                $scope.contacts = contacts;
                $scope.$apply();
            }, function (e) {
                console.log("Error finding contacts " + e.code)
            }, options);
        }
    }]);

