define(["jquery"], function($){

	return {
		createNewObjectAndClear: function (data){

				if($("#song_name").val() !== "" && $("#artist_name").val() !== "" && $("#album_name").val() !== ""){
				var newObj = {
					"title": $("#song_name").val(),
					"artist":$("#artist_name").val(),
					"album": $("#album_name").val()
				};
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
							" on the album "+firstArrObjects[i].album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
					}
						//loop over and output second array
					for(var n = 0; n < secondArrObjects.length; n++){
						$("#indiv_songs").append("<p>"+secondArrObjects[n].title+" - by "+secondArrObjects[n].artist+
							" on the album "+secondArrObjects[n].album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
					}	
						//append newOBJ --> which is last object in first json array
						console.log(newObj.title);
					$("#indiv_songs").append("<p>"+newObj.title+" - by "+newObj.artist+
							" on the album "+newObj.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
					$("#add_wrap").css("display", "none");
					$("#main_music_wrap").fadeIn("slow");
					clearInputs();

				} else {
					console.log(firstArrObjects);
					//connect each button to event listener
					for(var x = 0; x < firstArrObjects.length; x++){
						$("#indiv_songs").append("<p>"+firstArrObjects[x].title+" - by "+firstArrObjects[x].artist+
							" on the album "+firstArrObjects[x].album+"<button class='deleteSong btn btn-default'>Delete</button></p>");
					}

					$(".deleteSong").click(function(){
						$(this).parent().remove();
					});
				}
				$("#add_wrap").css("display", "none");
				$("#m_holder").fadeIn("slow");
				clearInputs();
			}

		}

	}

});
