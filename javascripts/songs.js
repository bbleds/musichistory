define(["jquery", "populate-songs", "manipulation", "get-more-songs"], function($, populateSongs, manipulation, getMoreSongs){
	
	//private variables
		// var firstArrObjects=[];
		// var secondArrObjects=[];
		// var moreSongsWereAdded = false;

		//Reference manipulation in order to manage these vars


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


//Need to place inside of a click function
// FirebaseLibrary.push("TestString");


	console.log("pop songs", populateSongs);
//Old Ajax call
	// $.ajax({
	// 	url: "songsList.json"
	// }).done(function(data){

	// 	loopOverMySongObjects(data);

	// 	// Add event listener and connection to function
	// 	$("#addBtn").click(function(){ createNewObjectAndClear(data); });

	// });


	//Ajax call for the extra songs
	// $.ajax({
	// 	url: "moreSongs.json"
	// }).done(function(data){
	// 	showExtraSongs(data);
	// });
//New modular ajax call
		populateSongs.getSongData();

//New second modular ajax call
		getMoreSongs.populateSecondSongs();
//functions
	// loop over default songs in json
	function loopOverMySongObjects(data){
		for(var i =0; i < data.songs.length; i++){
			console.log(data.songs[i]);
			var indivSong = data.songs[i];

			//push into new array to for when user adds songs after seeing more
			firstArrObjects.push(indivSong);

			$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");

			
			}
			//connect each button to event listener
			$(".deleteSong").click(function(){
				$(this).parent().remove();
			});
	}
 // });
	//	loop over second object list
	function showExtraSongs(data){
		console.log("Second Data is: ", data.MoreSongs);
		$("#moreSongs").click(function(){

			//set the height of container to height of screen

			$("#main_container").css("height", $(window).height()+300);

			//set height on resize
				$(window).resize(function(){
					$("#main_container").css("height", $(window).height()+300);
				});

					for(var i =0; i < data.MoreSongs.length; i++){
						var indivSong = data.MoreSongs[i];

						//push into new array to for when user adds songs after seeing more
						secondArrObjects.push(indivSong);

						$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");


					}
				$("#moreSongs").prop("disabled", true);
				manipulation.setIfAdded(true);

				//connect each button to event listener
				$(".deleteSong").click(function(){
					$(this).parent().remove();
				});

		});
	}


	//Show add song panel 
	function showAdder(){
		$("#m_holder").css("display", "none");
		$("#add_wrap").fadeIn("slow");
	}

	/* Event handler to run function when user wants to add a song and clicks on 
	Add Music ---> ONLY SHOWS THE PANEL DOESN'T Handle add functionality  */
	$("#add_music").click(
		function(){ 
			showAdder(); 
		})	;

	// Show view song list panel
	function showList(){
		$("#add_wrap").css("display", "none");
		$("#m_holder").fadeIn("slow");
	}

	//Event hanfer to run function when user wants to view list of all songs
	$("#list_music").click(
		function(){ 
			showList(); 
		});

	// //Clear user inputs after adding song
	// function clearInputs(){
	// 		$("#song_name").val("");
	// 		$("#artist_name").val("");
	// 		$("#album_name").val("");
	// }

		
});

