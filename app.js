(function () {
	angular.module('MyApp', [])
		.controller('MyController', ['$scope', function($scope) {
			$scope.message = 'Hello World';
		}]);
}());