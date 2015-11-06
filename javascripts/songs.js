define(["jquery", "manipulate", "populate-songs", "addSongFunctionality", "get-more-songs"], 
	function($, manipulate, populateSongs, addSongF, getMoreSongs){

//vars are now stored inside manipulate
		// var firstArrObjects=[];
		// var secondArrObjects=[];
		// var moreSongsWereAdded = false;
	//check if manipulate.js is linked right
		console.log("Manip is below ");
		console.log(manipulate.getFirstArray());


//Ajax call --> first call will now be in populate-songs.js
	// $.ajax({
	// 	url: "songsList.json"
	// }).done(function(data){

	// 	loopOverMySongObjects(data);

	// 	// Add event listener and connection to function
	// 	$("#addBtn").click(function(){ createNewObjectAndClear(data) });

	// });
			
	populateSongs.getInitialSongs();

	//add event listener for handling adding songs
	$("#addBtn").click(function(){ addSongF.createNewObjectAndClear() });	

	getMoreSongs.getSecondSongs();

	//Ajax call for the extra songs
	// $.ajax({
	// 	url: "moreSongs.json"
	// }).done(function(data){
	// 	showExtraSongs(data);
	// });

//functions

	// loop over default songs in json
	// function loopOverMySongObjects(data){
	// 	for(var i =0; i < data.songs.length; i++){
	// 		console.log(data.songs[i]);
	// 		var indivSong = data.songs[i];

	// 		//push into new array to for when user adds songs after seeing more
	// 		firstArrObjects.push(indivSong);

	// 		$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");

	// 		//connect each button to event listener
	// 		$(".deleteSong").click(function(){
	// 			$(this).parent().remove();
	// 		});
	// 	}
	// }

	//	loop over second object list
	// function showExtraSongs(data){
	// 	console.log("Second Data is: ", data.MoreSongs);
	// 	$("#moreSongs").click(function(){

	// 			for(var i =0; i < data.MoreSongs.length; i++){
	// 		var indivSong = data.MoreSongs[i];

	// 		//push into new array to for when user adds songs after seeing more
	// 		secondArrObjects.push(indivSong);

	// 		$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");

	// 		//connect each button to event listener
	// 		$(".deleteSong").click(function(){
	// 			$(this).parent().remove();
	// 		});

	// 	}
	// 	$("#moreSongs").prop("disabled", true);
	// 	moreSongsWereAdded = true;

	// 	});
	// }

	/*When adding song, Create new object, push it into json array, and output 
	---> main functionality when adding*/


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






