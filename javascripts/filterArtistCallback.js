define(["jquery", "manipulate"], function($, manipulate){

return	function(data){


				//clear inner html of indiv_songs in order to filter
				$("#indiv_songs").html("");
				// console.log(data.songs);
				console.log("the data is below");
				var arrayOfSongs =[]
				console.log("DATA", data)
				//loop through songs and store ones that will match inside of arrayOfSongs
				for(var key in data.songs){
									
					if (data.songs[key].artist.toLowerCase() === manipulate.getPublicArtist()) {
						// console.log("mushshshshsh");
						// console.log(key);
						// console.log(data.songs[key]);
						var filteredSongs = data.songs[key];
						arrayOfSongs.push(filteredSongs);

					}
				}

				//for each object inside array Of Songs, output it
					require(["hbs!../templates/filterArtists"], function(songTemplate){
							console.log("array of songs");
								console.log(arrayOfSongs);
		 	 				$("#indiv_songs").append(songTemplate(arrayOfSongs));

			 			//DOES NOT WORK IF YOU HAVE MULTIPLE SONGS FROM ONE ALBUM, outputs same one multiple times
						});
				console.log("array of songs below");
				console.log(arrayOfSongs);
			}

});