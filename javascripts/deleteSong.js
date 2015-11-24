define(["jquery", "firebase", "deleteCall"], 
	function($, firebase, deleteCall){

		// handles delete functionality for each delete button on song p tags, ajax call is separeted into another module
		return function(){
					$(".deleteSong").click(function(){
						// $(this).parent().remove();
						var textOfClicked = $(this).parent()[0].innerHTML;
						$(this).parent().remove();
						console.log(textOfClicked);
						var dashIndex = textOfClicked.split(" - ");
						console.log(dashIndex[0]);

						var titleToCompare = dashIndex[0];

						deleteCall()
						.then(function(data){

							console.log("BACK IN THEN");
							console.log("dashIndex", titleToCompare);
							var currentKey;
							//console.log(data);
							for(var key in data.songs){
								// console.log(data.songs[key].title);

								if(titleToCompare === data.songs[key].title){
									console.log("moose");
									currentKey = key;
									console.log(key);
									var FirebaseRef = 'https://radiant-inferno-9240.firebaseio.com/songs/'+currentKey;
									console.log(FirebaseRef);
									var myRef = new Firebase(FirebaseRef);
									//console.log(myRef.key());
									myRef.remove();

									 
								}
							}

							
						})
						.done(function(){
							console.log("inside DONEEEEEEEE");
							$("#addSongModal").modal();
							$(".modal-body").html("<p>Song has been removed from your playlist!</p>");
						})


						});


					//reference specific url
						//replace last thing in url with something from text on this
					 // var FirebaseRef = new Firebase('https://radiant-inferno-9240.firebaseio.com/songs/'+currentKey);

					//delete all data in this object
					// fredRef.remove();
		};

});