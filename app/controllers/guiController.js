angular.module('mainModule')

.controller('GuiController', GuiController);

GuiController.$inject = ['$scope', '$http'];

function GuiController($scope, $http) {
	$scope.view = "";
  $scope.locationSelector = "karlskrona";
}

/*.controller('GuiController', GuiController, ['$scope', function($scope) {
  $scope.locationSelector = "Karlskrona";
}]);*/
