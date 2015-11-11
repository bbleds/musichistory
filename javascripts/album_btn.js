define(["jquery", "filterSong", "manipulate"], function($, filterSong, manipulate){


return {

		addAlbums: function(){

			$.ajax({
				url: "https://radiant-inferno-9240.firebaseio.com/.json"
				//pass data to callbackOne function reference
			}).done(function(data1){

				console.log("data1", data1);

				//populate albums
				require(["hbs!../templates/addAlbum"], function(songTemplate){

					//create empty object array
					var objectArray = [];
					//create empty artist array
					var albumArray = [];

					//loop over objects in songs,
					for(var key in data1.songs){ 
						
						//if artist is not in artist array, push artist name into artist array and push current object into object array
						if(albumArray.indexOf(data1.songs[key].album) === -1){
							albumArray.push(data1.songs[key].album);
							objectArray.push(data1.songs[key]);
						}
					}

					//populate albums in left drop down, executed onclick on album dropdown
	      			$("#albums_here").html(songTemplate(objectArray));

	      			//If specific album is clicked, filter songs to songs from selected album
	      			$(".find_me").click(function(){
	      				//The text that was clicked inside album dropdown
	      				var clickedText = $(this)[0].children[0].innerHTML.toLowerCase();

	      				// If clicked album text = current key in songs
	      				manipulate.setPublicAlbum(clickedText);

	      				//run filter output
						filterSong.filterAlbum(data1);

					});
	    		});

			  });

			}
		};
			
});