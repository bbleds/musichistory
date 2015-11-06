define(["jquery", "manipulate", "callbackTwo"], 
	function($, manipulate, callbackTwo){
	
	//handles second ajax call below
		//passes to callbackTwo.js

	return{
		getSecondSongs: function(){

			$.ajax({
				url: "moreSongs.json"
				}).done(callbackTwo);

		}

	}
	

});

