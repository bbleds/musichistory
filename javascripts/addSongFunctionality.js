define(["jquery", "deleteSong"], function($, deleteSong){

	//return object below
	return {

		createNewObjectAndClear: function(){ 
			// console.log("son of a gun");

			if($("#song_name").val() !== "" && $("#artist_name").val() !== "" && $("#album_name").val() !== ""){
				var newObj = {

						"title": $("#song_name").val(),
						"artist":$("#artist_name").val(),
						"album": $("#album_name").val()
				  
				};
			}

				// console.log("new object is", newObj);
				// $("#indiv_songs").append("<p>"+newObj.title + " - by "+newObj.artist+" on the album "+newObj.album+"<button class='deleteSong btn btn-default'>Delete</button> </p>");
				// $("#add_wrap").css("display", "none");
				// $("#m_holder").fadeIn("slow");
				// deleteSong();

				//push to firebase
				$.ajax({
					url: "https://radiant-inferno-9240.firebaseio.com/songs.json",
					method: "POST",
					data: JSON.stringify(newObj)
				}).done(function(addedSong){
					console.log("Mah sonsgggggg");
					console.log(addedSong);
				});

				require(["hbs!../templates/addsongs"], function(songTemplate){
			      $("#indiv_songs").append(songTemplate(newObj));
			      $("#add_wrap").css("display", "none");
				  $("#m_holder").fadeIn("slow");
			      deleteSong();
	    });
		}
	};
});












