var app = angular.module('locationApp');

app.service('locationSvc', function($http){
	// stuff

	//gets Current 
	this.getLocation = function(cb){
		navigator.geolocation.getCurrentPosition(function(position){
			console.log(position)
			cb(position);
			},
			function(){
				console.log('navigator.location isn\'t working');
			}
		)
	}



})