define(["jquery", "manipulation", "clearInputs"], function($, manipulation, clearInputs){

	//private varables
		// var popSongsData= [];
		 arrayOfSongs = [];

	return {


		getSongData: function(){
			$.ajax({
				url: "songsList.json"
				}).done(function(data){
				//loopOverMySongObjects(data);
				console.log("data is", data);

				arrayOfSongs.push(data.songs);
				console.log("array of songs "+arrayOfSongs[0]);
				

				
				function loopOverMySongObjects(data){
				for(var i =0; i < data.songs.length; i++){
					console.log(data.songs[i]);
					var indivSong = data.songs[i];


					//push into new array to for when user adds songs after seeing more
					//popSongsData.push(indivSong);


					$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");

					
					}
					//connect each button to event listener
					$(".deleteSong").click(function(){
						$(this).parent().remove();
					});
				}

				loopOverMySongObjects(data);
				// Add event listener and connection to function
				$("#addBtn").click(function(){
					 // createNewObjectAndClear(data);

					 	/*When adding song, Create new object, push it into json array, and output 
						---> main functionality when adding*/
						function createNewObjectAndClear(data){ 
								// console.log("son of a gun");
								if($("#song_name").val() !== "" && $("#artist_name").val() !== "" && $("#album_name").val() !== ""){
									var newObj = {
										"title": $("#song_name").val(),
										"artist":$("#artist_name").val(),
										"album": $("#album_name").val()
									};
									// data.songs.push(newObj);
									manipulation.pushFirstArrayObjects(newObj);
									console.log("first array is ",manipulation.getFirstArrayObjects());
									// console.log(data.songs);
									//$("#indiv_songs").html("");

									//if more button has been clicked
										//loop over first array  and output EXCEPT FOR NEWLY PUSHED VALUE ABOVE --> newOBJ
										//loop over and output second array
										//append newOBJ --> which is last object in first json array
									//Else 
										//output first array

						//if more button has been clicked --> separate this into another module
								console.log("manips is: "+manipulation.seeIfAdded());

									if(manipulation.seeIfAdded() === true){
										// console.log("It is true, append it");
											//loop over first array  and output EXCEPT FOR NEWLY PUSHED VALUE ABOVE --> newOBJ
											//$("#indiv_songs").html("");
											console.log("below is what I need to target");
											console.log(manipulation.getFirstArrayObjects().length);

										for(var i = 0; i < manipulation.getFirstArrayObjects().length -1; i++){
											$("#indiv_songs").append("<p>"+manipulation.getFirstArrayObjects()[i].title+" - by "+manipulation.getFirstArrayObjects()[i].artist+
												" on the album "+manipulation.getFirstArrayObjects()[i].album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
										}
											//loop over and output second array
										for(var n = 0; n < manipulation.getSecondArrayObjects().length; n++){
											$("#indiv_songs").append("<p>"+manipulation.getSecondArrayObjects()[n].title+" - by "+manipulation.getSecondArrayObjects()[n].artist+
												" on the album "+manipulation.getSecondArrayObjects()[n].album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
										}	
											//append newOBJ --> which is last object in first json array
											console.log(newObj.title);
										$("#indiv_songs").append("<p>"+newObj.title+" - by "+newObj.artist+
												" on the album "+newObj.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
										$("#add_wrap").css("display", "none");
										$("#main_music_wrap").fadeIn("slow");
										clearInputs.clearInputs();

									} else {
										console.log(manipulation.getFirstArrayObjects()[0]);
										//connect each button to event listener
										console.log("the length is"+manipulation.getFirstArrayObjects().length);
										for(var x = 0; x < manipulation.getFirstArrayObjects().length; x++){
											$("#indiv_songs").append("<p>"+manipulation.getFirstArrayObjects()[x].title+" - by "+manipulation.getFirstArrayObjects()[x].artist+
												" on the album "+manipulation.getFirstArrayObjects()[x].album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
										}

										//empty array so that next enetered my user will be only song in array
										manipulation.emptyFirstArrayObjects([]);

										$(".deleteSong").click(function(){
											$(this).parent().remove();
										});
									}
									$("#add_wrap").css("display", "none");
									$("#m_holder").fadeIn("slow");
									// clearInputs();
									clearInputs.clearInputs();
								}
						}

						createNewObjectAndClear(data);

					  });
			});
		}

	};


});
