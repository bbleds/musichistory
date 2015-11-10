define(["jquery", "manipulate"], function($, manipulate){

return	function(data){

				var objectForSong ={};
				// console.log(data.songs);
				for(var key in data.songs){
									
					if (data.songs[key].album.toLowerCase() === manipulate.getPublicAlbum()) {
						console.log("mushshshshsh");
						filteredSongs = data.songs[key];
						require(["hbs!../templates/filterAlbums"], function(songTemplate){
		      			$("#indiv_songs").html(songTemplate(filteredSongs));
						
						//DOES NOT WORK IF YOU HAVE MULTIPLE SONGS FROM ONE ALBUM
					});

				}

			}
	}

});