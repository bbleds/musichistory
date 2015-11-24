define(["jquery", "q", "lodashTest", "manipulate", "populate-songs", "addSongFunctionality", "get-more-songs", "deleteSong", "artist_btn", "album_btn"], 
	function($, Q, lodashTest, manipulate, populateSongs, addSongF, getMoreSongs, deleteSong, artBtn, albumBtn){

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

	//refactor get stuff to firebase
			// Create a reference to your Firebase database
			var myFirebaseRef = new Firebase("https://radiant-inferno-9240.firebaseio.com");

			// Listen for when anything changes on the "songs" key
			myFirebaseRef.child("songs").on("value", function(snapshot) {

				// Store the entire songs key in a local variable
	 				var allSongsObject = snapshot.val();
	 				console.log(allSongsObject);

 				// Bind the allSongsObject to the song list Handlebar template
	 				require(["hbs!../templates/songs"], function(songTemplate){
				      $("#indiv_songs").html(songTemplate(allSongsObject));
				      deleteSong();
				    });

  				// Bind the unique artists to the artists template
	  				 artBtn.addArtists(allSongsObject);


  				// Bind the unique albums to the albums template
	  				albumBtn.addAlbums(allSongsObject);

  				//bind unfilter button to reset songs to inital
	  				$("#filter_me").click(function(){
		  				require(["hbs!../templates/songs"], function(songTemplate){
						    $("#indiv_songs").html(songTemplate(allSongsObject));
						    deleteSong();
					    });
	  				});
			});


	//add event listener for handling adding songs
		//pass in addSongFunctionality object that is passed in above from that file
			//call the createNewObjectAndClear method that is built in on that object
				//this attaches event handler for adding songs
				// console.log(">>>>>>>>>>>>>", addSongF)
		//refactor to promises
		$("#addBtn").click(function(){
			// console.log(">>>>>>>>>>>>>", addSongF()) 
			addSongF()
			.then(function(dataReturned){
				console.log(" this is a promise return");

				$("#addSongModal").modal();
				$(".modal-body").html("<p>Song has been added to your playlist!</p>");
			});
		 });	

		



	//Ajax call get-more-songs.json
		// getMoreSongs.getSecondSongs();


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




	// mess with lodash
	lodashTest();

});