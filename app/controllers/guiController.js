angular.module('mainModule')

.controller('GuiController', GuiController);

GuiController.$inject = ['$scope', '$http'];

function GuiController($scope, $http) {
	$scope.view = "";
  $scope.locationSelector = "karlskrona";
	$scope.showLogin = false;
	$scope.events = {
		'karlskrona': [
			createEvent('Finsoppa', new Date(2017, 03, 30, 19), 'Minerva','Mjölks finsoppa!'),
			createEvent('Soppa', new Date(2017, 04, 06, 19), 'Minerva', 'Torsdag! Vilket betyder ärtsoppa och punsch. Klart du ska med!')
		],
		'malmo': [],
		'halmstad': []
	};
	console.log($scope.events);

	$scope.getDateString = function(currentEvent) {
		return currentEvent.time.toLocaleDateString();
	}

	$scope.getTimeString = function(currentEvent) {
		return currentEvent.time.toLocaleTimeString();
	}
}

/*.controller('GuiController', GuiController, ['$scope', function($scope) {
  $scope.locationSelector = "Karlskrona";
}]);*/
