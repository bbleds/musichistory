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
		console.log("Second Data is: ", data.MoreSongs);
		$("#moreSongs").click(function(){
			for(var i =0; i < data.MoreSongs.length; i++){
			var indivSong = data.MoreSongs[i];
			$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong'>Delete</button></p>");

			//connect each button to event listener
			$(".deleteSong").click(function(){
				$(this).parent().remove();
			});

		}
		$("#moreSongs").prop("disabled", true);
		moreSongsWereAdded = true;

		});
	});

//functions

	// loop over songs in json
	function loopOverMySongObjects(data){
		for(var i =0; i < data.songs.length; i++){
			console.log(data.songs[i]);
			var indivSong = data.songs[i];
			$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong'>Delete</button></p>");

			//connect each button to event listener
			$(".deleteSong").click(function(){
				$(this).parent().remove();
			});
		}
	}

	//When adding song, Create new object, push it into json array, and output --- main functionality when adding
	function createNewObjectAndClear(data){ 
			// console.log("son of a gun");
			if($("#song_name").val() !== "" && $("#artist_name").val() !== "" && $("#album_name").val() !== ""){
				var newObj = {
					"title": $("#song_name").val(),
					"artist":$("#artist_name").val(),
					"album": $("#album_name").val()
				}
				data.songs.push(newObj);
				// console.log(data.songs);
				$("#indiv_songs").html("");

				//if user added more songs
				if(moreSongsWereAdded === true){
					//this is where I need to loop through both objects and output onto dom, then insert new song
					console.log("there are more songs");

				}else{

				for(var i =0; i < data.songs.length; i++){
					console.log(data.songs[i]);
					var indivSong = data.songs[i];
					$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong'>Delete</button></p>");
					//connect each button to event listener
					$(".deleteSong").click(function(){
						$(this).parent().remove();
					});
					}
				$("#add_wrap").css("display", "none");
				$("#main_music_wrap").fadeIn("slow");
				clearInputs();
			}
		}

	}


	//Show add song panel 
	function showAdder(){
		$("#main_music_wrap").css("display", "none");
		$("#add_wrap").fadeIn("slow");
	}

	//Event handler to run function when user wants to add a song and clicks on Add Music
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







