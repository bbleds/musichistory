define(["jquery", "manipulate"], function($, manipulate){

	//return first ajax callback function below

	return	function(data){
		console.log("inside callback");
		console.log(data);


		//require();
		//hbs should be handled here

		//below needs to be my reference to handlebars?

		require(["hbs!../templates/songs"], function(songTemplate){
	      $("#indiv_songs").html(songTemplate(data));
	    });

		// for(var i =0; i < data.songs.length; i++){
		// 	console.log("sonnnngggyyy");
		// 	console.log(data.songs[i]);
		// 	var indivSong = data.songs[i];

		// 	//push into new array to for when user adds songs after seeing more
		// 	// firstArrObjects.push(indivSong);


		// 	$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong btn btn-default'>Delete</button></p>");

		// 	//connect each button to event listener
		// 	$(".deleteSong").click(function(){
		// 		$(this).parent().remove();
		// 	});
		// }
	}

				// Add event listener and connection to function


});