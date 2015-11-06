define(["jquery", "manipulate", "populate-songs", "addSongFunctionality", "get-more-songs"], 
	function($, manipulate, populateSongs, addSongF, getMoreSongs){


//Ajax call --> first call will now be in populate-songs.js
	populateSongs.getInitialSongs();

	//add event listener for handling adding songs
	$("#addBtn").click(function(){ addSongF.createNewObjectAndClear() });	

	//Ajax call get-more-songs.json
	getMoreSongs.getSecondSongs();


//functions

	//Show add song panel 
	function showAdder(){
		$("#m_holder").css("display", "none");
		$("#add_wrap").fadeIn("slow");
	}


	/* Event handler to run function when user wants to add a song and clicks on 
	Add Music ---> ONLY SHOWS THE PANEL DOESN'T Handle add functionality  */
	$("#add_music").click(function(){ showAdder(); });


	// Show view song list panel
	function showList(){
		$("#add_wrap").css("display", "none");
		$("#m_holder").fadeIn("slow");
	}

	//Event hanfer to run function when user wants to view list of all songs
	$("#list_music").click(function(){ showList(); });



	//Clear user inputs after adding song
	function clearInputs(){
			$("#song_name").val("");
			$("#artist_name").val("");
			$("#album_name").val("");
	}

});