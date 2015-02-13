/*var testApp = angular.module('testApp', []);

testApp.controller('movieTestController', function ($scope) {
	$scope.movies = [
		{'name': 'Alexandro',
		'year': 2222},
		{'name': 'Blue Eyes',
		'year': 1111},
		{'name': 'Now or Never',
		'year': 6666},
		{'name': 'Machooo',
		'year': 5555},
		{'name': 'Pascual',
		'year': 3333},
		{'name': 'Jose',
		'year': 4444},
		];
		$scope.orderProp = 'year';
	});*/

/*var testApp = angular.module('testApp', []);

testApp.controller('movieTestController', function ($scope, $http) {
	$http.get('../json/movies.json').success(function(data) {
		$scope.movies = data;
	});
	$scope.orderProp = 'year';
});*/

/*var testApp = angular.module('testApp', []);

function movieTestController($scope, $http) {
	$http.get('../json/movies.json').success(function(data) {
		$scope.movies = data;
	});
	$scope.orderProp = 'year';
	$scope.movies = data.splice(0, 5);
};
movieTestController.$inject = ['$scope', '$http'];
testApp.controller('movieTestController', movieTestController);*/

var testApp = angular.module('testApp', []);

testApp.controller('testApp', ['$scope', '$http', function($scope, $http) {
	$http.get('json/movies.json').success(function(data) {
		$scope.movies = data;
	});
	$scope.orderProp = 'year';
	$scope.movies = data.splice(0, 5);
}]);