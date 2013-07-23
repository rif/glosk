'use strict';

/* Controllers */

function HomeCtrl ($scope, navSvc, $rootScope) {
        $rootScope.slidePage = function (path, type) {
            navSvc.slidePage(path, type);
        };
        $rootScope.back = function () {
            navSvc.back();
        };
    }
    
function ContactsCtrl ($scope, contacts) {
        $scope.find = function () {
            $scope.contacts = [];
            alert('contacts');
            var fields = ["displayName", "name", "phoneNumbers"];
            contacts.findContacts(fields, function (contacts) {
                $scope.contacts = contacts;
                $scope.$apply();
            }, function (e) {
                console.log("Error finding contacts " + e.code)
            });
        }
    }

