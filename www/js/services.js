'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('glosk.services', []).
    value('version', '0.1').
    factory('navSvc',function ($navigate) {
        return {
            slidePage: function (path, type) {
                $navigate.go(path, type);
            },
            back: function () {
                $navigate.back();
            }
        }
    }).
// phonegap ready service - listens to deviceready
    factory('phonegapReady',function () {
        return function (fn) {
            var queue = [];
            var impl = function () {
                queue.push(Array.prototype.slice.call(arguments));
            };

            document.addEventListener('deviceready', function () {
                queue.forEach(function (args) {
                    fn.apply(this, args);
                });
                impl = fn;
            }, false);

            return function () {
            	alert('phonegapReady return function');
                return impl.apply(this, arguments);
            };
        };
    }).
    factory('contacts', function ($rootScope, phonegapReady) {
        return {
            findContacts: phonegapReady(function (onSuccess, onError) {
                var options = new ContactFindOptions();
                options.filter = "";
                options.multiple = true;
                var fields = ["displayName", "name"];
                navigator.contacts.find(fields, function (r) {
                    console.log("Success" + r.length);
                    var that = this,
                        args = arguments;
                    if (onSuccess) {
                        $rootScope.$apply(function () {
                            onSuccess.apply(that, args);
                        });
                    }
                }, function () {
                    var that = this,
                        args = arguments;

                    if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                    }
                }, options)
            })
        }
    });