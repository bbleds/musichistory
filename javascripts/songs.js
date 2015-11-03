var firstArrObjects=[];
var secondArrObjects=[];

$(document).ready(function(){

var moreSongsWereAdded = false;


//Ajax call
	$.ajax({
		url: "songsList.json"
	}).done(function(data){

		loopOverMySongObjects(data);

		// Add event listener and connection to function
		$("#addBtn").click(function(){ createNewObjectAndClear(data) });

	});


	//Ajax call for the extra songs
	$.ajax({
		url: "moreSongs.json"
	}).done(function(data){
		showExtraSongs(data);
	});

//functions

	// loop over default songs in json
	function loopOverMySongObjects(data){
		for(var i =0; i < data.songs.length; i++){
			console.log(data.songs[i]);
			var indivSong = data.songs[i];

			//push into new array to for when user adds songs after seeing more
			firstArrObjects.push(indivSong);

			$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong'>Delete</button></p>");

			//connect each button to event listener
			$(".deleteSong").click(function(){
				$(this).parent().remove();
			});
		}
	}

	//	loop over second object list
	function showExtraSongs(data){
		console.log("Second Data is: ", data.MoreSongs);
		$("#moreSongs").click(function(){

				for(var i =0; i < data.MoreSongs.length; i++){
			var indivSong = data.MoreSongs[i];

			//push into new array to for when user adds songs after seeing more
			secondArrObjects.push(indivSong);

			$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong'>Delete</button></p>");

			//connect each button to event listener
			$(".deleteSong").click(function(){
				$(this).parent().remove();
			});

		}
		$("#moreSongs").prop("disabled", true);
		moreSongsWereAdded = true;

		});
	}

	/*When adding song, Create new object, push it into json array, and output 
	---> main functionality when adding*/
	function createNewObjectAndClear(data){ 
			// console.log("son of a gun");
			if($("#song_name").val() !== "" && $("#artist_name").val() !== "" && $("#album_name").val() !== ""){
				var newObj = {
					"title": $("#song_name").val(),
					"artist":$("#artist_name").val(),
					"album": $("#album_name").val()
				}
				// data.songs.push(newObj);
				firstArrObjects.push(newObj);
				console.log("first array is ",firstArrObjects);
				// console.log(data.songs);
				$("#indiv_songs").html("");

				//if more button has been clicked
					//loop over first array  and output EXCEPT FOR NEWLY PUSHED VALUE ABOVE --> newOBJ
					//loop over and output second array
					//append newOBJ --> which is last object in first json array
				//Else 
					//output first array

				//if more button has been clicked
				if(moreSongsWereAdded === true){
					// console.log("It is true, append it");
						//loop over first array  and output EXCEPT FOR NEWLY PUSHED VALUE ABOVE --> newOBJ
						$("#indiv_songs").html("");
					for(var i = 0; i < firstArrObjects.length -1; i++){
						$("#indiv_songs").append("<p>"+firstArrObjects[i].title+" - by "+firstArrObjects[i].artist+
							" on the album "+firstArrObjects[i].album+"<button class='deleteSong'>Delete</button></p>");
					}
						//loop over and output second array
					for(var i = 0; i < secondArrObjects.length; i++){
						$("#indiv_songs").append("<p>"+secondArrObjects[i].title+" - by "+secondArrObjects[i].artist+
							" on the album "+secondArrObjects[i].album+"<button class='deleteSong'>Delete</button></p>");
					}	
						//append newOBJ --> which is last object in first json array
						console.log(newObj.title);
					$("#indiv_songs").append("<p>"+newObj.title+" - by "+newObj.artist+
							" on the album "+newObj.album+"<button class='deleteSong'>Delete</button></p>");
					$("#add_wrap").css("display", "none");
					$("#main_music_wrap").fadeIn("slow");
					clearInputs();

				} else {
					console.log(firstArrObjects);
					//connect each button to event listener
					for(var i = 0; i < firstArrObjects.length; i++){
						$("#indiv_songs").append("<p>"+firstArrObjects[i].title+" - by "+firstArrObjects[i].artist+
							" on the album "+firstArrObjects[i].album+"<button class='deleteSong'>Delete</button></p>");
					}

					$(".deleteSong").click(function(){
						$(this).parent().remove();
					});
					}
				$("#add_wrap").css("display", "none");
				$("#main_music_wrap").fadeIn("slow");
				clearInputs();
			}
	}



	//Show add song panel 
	function showAdder(){
		$("#main_music_wrap").css("display", "none");
		$("#add_wrap").fadeIn("slow");
	}


	/* Event handler to run function when user wants to add a song and clicks on 
	Add Music ---> ONLY SHOWS THE PANEL DOESN'T Handle add functionality  */
	$("#add_music").click(function(){ showAdder(); });


	// Show view song list panel
	function showList(){
		$("#add_wrap").css("display", "none");
		$("#main_music_wrap").fadeIn("slow");
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







