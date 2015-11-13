define(["jquery", "manipulate"], function($, manipulate){

return	function(data){


				//clear inner html of indiv_songs in order to filter
				$("#indiv_songs").html("");
				// console.log(data);
				console.log("the data is below");
				var arrayOfSongs =[]
				console.log("DATA", data)
				//loop through songs and store ones that will match inside of arrayOfSongs
				for(var key in data){
					console.log("compare below");
					console.log(data[key].album.toLowerCase());
					console.log(manipulate.getPublicAlbum());
									
					if (data[key].album.toLowerCase() === manipulate.getPublicAlbum()) {
						console.log("mushshshshsh");
						console.log(key);
						console.log(data[key]);
						var filteredSongs = data[key];
						arrayOfSongs.push(filteredSongs);

					} else{
						console.log("nope it aint");
					}
				}

				//for each object inside array Of Songs, output it
					require(["hbs!../templates/filterAlbums"], function(songTemplate){
							console.log("array of songs");
								console.log(arrayOfSongs);
		 	 				$("#indiv_songs").append(songTemplate(arrayOfSongs));

			 			//DOES NOT WORK IF YOU HAVE MULTIPLE SONGS FROM ONE ALBUM, outputs same one multiple times
						});
				console.log("array of songs below");
				console.log(arrayOfSongs);
			}

		});



//push filtered songs into an array of objects,
//loop over that array of objects
//output each with handlebars
//I will need an each inside handlebars file