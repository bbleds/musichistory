define(["jquery", "deleteSong"], function($, deleteSong){
	
		//this is where second callback is
			//showExtraSongs(data);

	return function(data){
		console.log("inside cb2");
		console.log("Second Data is: ", data.MoreSongs);
		$("#moreSongs").click(function(){

			//hbs should be handled here
			require(["hbs!../templates/songs"], function(songTemplate){
	      $("#indiv_songs").append(songTemplate(data));
	      console.log("I ran");
	      deleteSong();
	    });

		$("#moreSongs").prop("disabled", true);
		// moreSongsWereAdded = true;

		});


	}
});