define(["jquery", "filterSong", "manipulate"], function($, filterSong, manipulate){

return {

		
		addArtists: function(){

			$.ajax({
				url: "https://radiant-inferno-9240.firebaseio.com/.json"
				//pass data to callbackOne function reference
			}).done(function(data1){

				console.log("data1", data1);

				//populate albums
				require(["hbs!../templates/addArtists"], function(songTemplate){

					//populate albums in left drop down, executed onclick on album dropdown
	      			$("#artists_here").html(songTemplate(data1));

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
