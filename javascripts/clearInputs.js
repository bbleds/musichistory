define(["jquery"],
	function($){

	return {
			//Clear user inputs after adding song

			clearInputs: function(){
					$("#song_name").val("");
					$("#artist_name").val("");
					$("#album_name").val("");
			}
	}


});
