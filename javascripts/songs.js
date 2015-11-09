define(["jquery", "manipulate", "populate-songs", "addSongFunctionality", "get-more-songs", "deleteSong", "artist_btn"], 
	function($, manipulate, populateSongs, addSongF, getMoreSongs, deleteSong, artBtn){

//Main logic of app

	//Navbar functionality for fade-in on scroll --> 
		//set the height of container to height of screen
			$("#main_container").css("height", $(window).height());

		//set height on resize
			$(window).resize(function(){
				$("#main_container").css("height", $(window).height());
			});


		//scroll event handlers for y postion 
			$(window).scroll(function(){
				var ypos = window.pageYOffset;
				console.log("ypos", ypos);
				if(ypos >= 88){
					$(".navbar-default").css("backgroundColor", "rgba(0, 0, 0, 0.82)");
				} else {
					$(".navbar-default").css("backgroundColor", "transparent");
				}
			});
	// end nav functionality


	//call artist and album button population

	artBtn.addArtists();



	//Ajax call --> first call will now be in populate-songs.js
		populateSongs.getInitialSongs();

	//add event listener for handling adding songs
		//pass in addSongFunctionality object that is passed in above from that file
			//call the createNewObjectAndClear method that is built in on that object
				//this attaches event handler for adding songs
		$("#addBtn").click(function(){ addSongF.createNewObjectAndClear(); });	

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