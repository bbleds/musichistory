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
				}
			}

				console.log("new object is", newObj);
				$("#indiv_songs").append("<p>"+newObj.title + " - by "+newObj.artist+" on the album "+newObj.album+"<button class='deleteSong btn btn-default'>Delete</button> </p>");
				$("#add_wrap").css("display", "none");
				$("#m_holder").fadeIn("slow");
				deleteSong();
		}
	}
});












