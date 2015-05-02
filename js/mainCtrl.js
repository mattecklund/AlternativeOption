var app = angular.module('locationApp');

app.controller('mainCtrl', function($scope, locationSvc, weatherSvc){
	// stuff
	//build location object
	// $scope.weather;
	$scope.location = {
		lat: 39,
		lon: -111
	}

	$scope.getWeather = function(){
		weatherSvc.getWeather($scope.location).then(function(response){
				// console.log('the promise was fulfilled with a ' + response.status);
				console.log(response);
				$scope.weather = response.data;
				$scope.weather.main.temp = parseFloat(($scope.weather.main.temp - 273.15).toFixed(1));
				// console.log($scope.weather);
			},
			function(response){
				console.log('We made a boo-boo - response was a ' + response.status)
			}
		);
		
	};
	
	$scope.getLocation = function(){
		locationSvc.getLocation().then(
				function(location){
					$scope.location.lat = location.coords.latitude;
					$scope.location.lon = location.coords.longitude;
					$scope.getWeather();
				},
				function(location){
					console.log(location);
				}
			)
			
	}

		

	$scope.getLocation();

});





















