define(["jquery", "manipulate", "deleteSong"], function($, manipulate, deleteSong){

	//return first ajax callback function below

	return	function(data){
		console.log("inside callback");
		console.log(data);


		//require();
		//hbs should be handled here

		require(["hbs!../templates/songs"], function(songTemplate){
	      $("#indiv_songs").html(songTemplate(data));
	      deleteSong();
	    });

	}



});