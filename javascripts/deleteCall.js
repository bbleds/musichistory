define(["jquery", "q"], function($,Q){

return function(){

		 var deferred = Q.defer();

	$.ajax({
			url: "https://radiant-inferno-9240.firebaseio.com/.json"
			//pass data to callbackOne function reference
		}).done(function(data){

			console.log("I deleted from firebase!!!!!!!!!!!!!!!!");
			deferred.resolve(data);
		});

		return deferred.promise;

}




});
