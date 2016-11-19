angular.module('mainModule')

.controller('GuiController', GuiController);

GuiController.$inject = ['$scope', '$http'];

function GuiController($scope, $http) {
  $scope.locationSelector = "Karlskrona";
}

/*.controller('GuiController', GuiController, ['$scope', function($scope) {
  $scope.locationSelector = "Karlskrona";
}]);*/