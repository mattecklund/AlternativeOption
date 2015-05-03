var app = angular.module('locationApp');

app.service('weatherSvc', function($http){
	// stuff
	var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?'

	this.getWeather = function(location){ // expects location to be an object
		// console.log(location);
		// var requestURL = weatherURL + 'lat=44' + '&lon=-110'
		// console.log('On Her Majesty\'s Secret Weather Service');
		return $http({
			method: 'GET',
			url: weatherURL + 'lat=' + location.latitude + '&lon=' + location.longitude
		});
	};



})