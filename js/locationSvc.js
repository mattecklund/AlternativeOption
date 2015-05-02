var app = angular.module('locationApp');

app.service('locationSvc', function($http, $q){
	// stuff

	//gets Current 
	this.getLocation = function(){
		var dfd = $q.defer();
		navigator.geolocation.getCurrentPosition(function(position){
				// console.log(position)
				dfd.resolve(position);
			},
			function(){
				console.log('navigator.location isn\'t working');
				dfd.reject('Didn\'t work');
			})
		return dfd.promise;
	}



})