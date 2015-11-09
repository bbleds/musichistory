define(["jquery", "manipulate", "callbackOne"], function($, manipulate, callbackOne){

	//define first ajax call below
		//the only call needed below is the ajax call, define callback somewhere else

	return {
		getInitialSongs : function(){
		$.ajax({
				//url: "songsList.json"
				url:"https://radiant-inferno-9240.firebaseio.com/.json"
				//pass data to callbackOne function reference
			}).done(callbackOne);
		}

	};

});