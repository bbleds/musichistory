define(["jquery"], function($){

	//private varables
		// var popSongsData= [];

	return {

		getSongData: function(){
			$.ajax({
				url: "songsList.json"
				}).done(function(data){
				//loopOverMySongObjects(data);
				function loopOverMySongObjects(data){
				for(var i =0; i < data.songs.length; i++){
					console.log(data.songs[i]);
					var indivSong = data.songs[i];


					//push into new array to for when user adds songs after seeing more
					//popSongsData.push(indivSong);


					$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");

					
					}
					//connect each button to event listener
					$(".deleteSong").click(function(){
						$(this).parent().remove();
					});
				}

				loopOverMySongObjects(data);
				// Add event listener and connection to function
				$("#addBtn").click(function(){ createNewObjectAndClear(data); });
			});
		}

	};


});
