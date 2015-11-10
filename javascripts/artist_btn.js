define(["jquery", "filterSong", "manipulate"], function($, filterSong, manipulate){

return {

		addArtists: function(){


			$.ajax({
					url: "https://radiant-inferno-9240.firebaseio.com/.json"
					//pass data to callbackOne function reference
				}).done(function(data1){

					// console.log("data one");
					// console.log(data1);

					//populate artists and albums
					require(["hbs!../templates/addArtists"], function(songTemplate){
		      			$("#artists_here").html(songTemplate(data1));
		      			$(".find_me").click(function(){
							console.log($(this)[0].children[0].innerHTML);
							for( key in data1.songs){
									var clickedText = $(this)[0].children[0].innerHTML.toLowerCase();
									var loweredLetters = data1.songs[key].artist.toLowerCase();
									

									if (clickedText === loweredLetters) {
										filterSong.filterSong();
									};

								}
						});
		    		});


				});

				}
			};
			
});
