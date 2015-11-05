define(["jquery", "manipulate"], function($, manipulate){

	//define first ajax call below

	return {
		getInitialSongs : function(){
		$.ajax({
				url: "songsList.json"
				
			}).done(function(data){

				loopOverMySongObjects(data);

				// Add event listener and connection to function
				$("#addBtn").click(function(){ createNewObjectAndClear(data) });

			});
		}

	}

});