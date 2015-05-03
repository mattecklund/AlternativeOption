var app = angular.module('locationApp');

app.service('locationSvc', function($http, $q){
	// stuff

	//gets Current 
	this.getLocation = function(){
		var deferred = $q.defer();
		navigator.geolocation.getCurrentPosition(function(position){
				// console.log(position)
				deferred.resolve(position);
			},
			function(){
				console.log('navigator.location isn\'t working');
				deferred.reject('Didn\'t work');
			})
		return deferred.promise;
	}



})