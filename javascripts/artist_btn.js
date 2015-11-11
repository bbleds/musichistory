define(["jquery", "filterSong", "manipulate"], function($, filterSong, manipulate){

return {

		
		addArtists: function(){

			$.ajax({
				url: "https://radiant-inferno-9240.firebaseio.com/.json"
				//pass data to callbackOne function reference
			}).done(function(data1){


				//populate albums
				require(["hbs!../templates/addArtists"], function(songTemplate){

					//create empty object array
					var objectArray = [];
					//create empty artist array
					var artistArray = [];

					//loop over objects in songs,
					for(var key in data1.songs){ 
						
						//if artist is not in artist array, push artist name into artist array and push current object into object array
						if(artistArray.indexOf(data1.songs[key].artist) === -1){
							artistArray.push(data1.songs[key].artist);
							objectArray.push(data1.songs[key]);
						}
					}

					//pass objectArray
					//populate albums in left drop down, executed onclick on album dropdown
	      			$("#artists_here").html(songTemplate(objectArray));


	      			//If specific album is clicked, filter songs to songs from selected album
	      			$(".find_me").click(function(){
	      				//The text that was clicked inside album dropdown
	      				var clickedText = $(this)[0].children[0].innerHTML.toLowerCase();

	      				// If clicked album text = current key in songs
	      				manipulate.setPublicArtist(clickedText);

	      				//run filter output
						filterSong.filterArtists(data1);

					});
	    		});

			  });

			}
		};
			
});
