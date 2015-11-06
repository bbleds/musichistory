define(["jquery", "manipulate", "callbackTwo"], 
	function($, manipulate, callbackTwo){
	

	return{
		getSecondSongs: function(){

			$.ajax({
				url: "moreSongs.json"
				}).done(callbackTwo);

		}

	}
	

});

