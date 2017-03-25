angular.module('mainModule')

.controller('GuiController', GuiController);

GuiController.$inject = ['$scope', '$http'];

function GuiController($scope, $http) {
	$scope.view = "";
  $scope.locationSelector = "karlskrona";
	$scope.showLogin = false;
}

/*.controller('GuiController', GuiController, ['$scope', function($scope) {
  $scope.locationSelector = "Karlskrona";
}]);*/
