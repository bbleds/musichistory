define(["jquery", "manipulation"], function($, manipulation){

		return {

		populateSecondSongs: function(){
			$.ajax({
				url: "moreSongs.json"
			}).done(function(data){
				// showExtraSongs(data);
				console.log(data.MoreSongs);

				//	loop over second object list
				function showExtraSongs(data){
					console.log("Second Data is: ", data.MoreSongs);
					$("#moreSongs").click(function(){

						//set the height of container to height of screen

						$("#main_container").css("height", $(window).height()+300);

						//set height on resize
							$(window).resize(function(){
								$("#main_container").css("height", $(window).height()+300);
							});

								for(var i =0; i < data.MoreSongs.length; i++){
									var indivSong = data.MoreSongs[i];

									//push into new array to for when user adds songs after seeing more
									manipulation.pushSecondArrayObjects(indivSong);

									$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");


								}
							$("#moreSongs").prop("disabled", true);
							manipulation.setIfAdded(true);

							//connect each button to event listener
							$(".deleteSong").click(function(){
								$(this).parent().remove();
							});

					});
				}

				showExtraSongs(data);



			});
		}



		}

});