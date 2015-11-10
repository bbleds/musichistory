define(["jquery", "manipulate"], function($, manipulate){

	return {

		filterSong:function(){
		$.ajax({
				//url: "songsList.json"
				url:"https://radiant-inferno-9240.firebaseio.com/.json"
				//pass data to callbackOne function reference
			}).done(function(data){

				var objectForSong ={};
				// console.log(data.songs);
				for(var key in data.songs){
									
					if (data.songs[key].album.toLowerCase() === manipulate.getPublicAlbum()) {
						console.log("mushshshshsh");
						filteredSongs = data.songs[key];
						require(["hbs!../templates/filterAlbums"], function(songTemplate){
		      			$("#indiv_songs").html(songTemplate(filteredSongs));
						
					});

				}

			}
		});

	  }

	}
});