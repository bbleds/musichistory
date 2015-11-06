define(["jquery", "deleteSong"], function($, deleteSong){
	
		//this is where second callback is handled for extra songs

	return function(data){
		
		// call this function to load extra songs ONLY when #moreSongs is clicked
		$("#moreSongs").click(function(){
		
		//Change height of main container
		$("#main_container").css("height", $(window).height()+300);

		//handlebars handled here
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