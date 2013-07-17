'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('glosk.services', []).
  value('version', '0.1');


glosk.factory('navSvc', function($navigate) {
    return {
        slidePage: function (path,type) {
            $navigate.go(path,type);
        },
        back: function () {
            $navigate.back();
        }
    }
});