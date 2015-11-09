define(["jquery"], function(){

return {

		addArtists: function(){
			// $("#artist-btn").click(function(){
			// 	console.log("moo");
			// });

			$.ajax({
					url: "songsList.json"
					//pass data to callbackOne function reference
				}).done(function(data1){

					//populate data1
					require(["hbs!../templates/addArtists"], function(songTemplate){
		      			$("#artists_here").append(songTemplate(data1));
		    		});

						//call for other file
						$.ajax({
							url: "moreSongs.json"
							
							//populate data2
						}).done(function(data2){
							require(["hbs!../templates/addAlbum"], function(songTemplate){
		      				$("#albums_here").append(songTemplate(data2));
		    				});

						});
					});

				}
			};
			
});
