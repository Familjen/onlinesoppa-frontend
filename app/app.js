'use strict';

// Declare app level module which depends on views, and components
angular.module('mainModule', [])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);