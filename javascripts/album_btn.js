define(["jquery", "filterSong", "manipulate"], function($, filterSong, manipulate){


return {

		addAlbums: function(){

			$.ajax({
					url: "https://radiant-inferno-9240.firebaseio.com/.json"
					//pass data to callbackOne function reference
				}).done(function(data1){

					// console.log("data one");
					// console.log(data1);

					//populate artists and albums
					require(["hbs!../templates/addAlbum"], function(songTemplate){
		      			$("#albums_here").html(songTemplate(data1));
		      			$(".find_me").click(function(){
								console.log($(this)[0].children[0].innerHTML);
								for(var key in data1.songs){
									
									var clickedText = $(this)[0].children[0].innerHTML.toLowerCase();
									var loweredLetters = data1.songs[key].album.toLowerCase();
									

									if (clickedText === loweredLetters) {
										manipulate.setPublicAlbum(loweredLetters);
										console.log(manipulate.getPublicAlbum());
										//set album to public, then run filter
										filterSong.filterSong();
									}

								}
						});
		    		});

				});

				}
			};
			
});