define(["jquery"], function($){
	
		//this is where second callback is
			//showExtraSongs(data);

	return function(data){
		console.log("inside cb2");
		console.log("Second Data is: ", data.MoreSongs);
		$("#moreSongs").click(function(){

			//hbs should be handled here
			require(["hbs!../templates/songs"], function(songTemplate){
	      $("#indiv_songs").append(songTemplate(data));
	      console.log("I ran");
	    });

		// 	for(var i =0; i < data.MoreSongs.length; i++){
		// 	var indivSong = data.MoreSongs[i];

		// 	//push into new array to for when user adds songs after seeing more
		// 	// secondArrObjects.push(indivSong);

		// 	$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");

		// 	//connect each button to event listener
		// 	$(".deleteSong").click(function(){
		// 		$(this).parent().remove();
		// 	});

		// }
		$("#moreSongs").prop("disabled", true);
		// moreSongsWereAdded = true;

		});


	}
});