define(["jquery", "q", "deleteSong"], function($, Q, deleteSong){

	//return object below
	return function(){ 
			// console.log("son of a gun");

			//set deffered object
		 	 var deferred = Q.defer();

			if($("#song_name").val() !== "" && $("#artist_name").val() !== "" && $("#album_name").val() !== ""){
				var newObj = {

						"title": $("#song_name").val(),
						"artist":$("#artist_name").val(),
						"album": $("#album_name").val()
				  
				};
			}

				//push to firebase
				$.ajax({
					url: "https://radiant-inferno-9240.firebaseio.com/songs.json",
					method: "POST",
					data: JSON.stringify(newObj)
				}).done(function(addedSong){
					console.log("Mah sonsgggggg");
					console.log(addedSong);

					//resolve promise
			 		deferred.resolve(addedSong);
				});

				require(["hbs!../templates/addsongs"], function(songTemplate){
			      $("#indiv_songs").append(songTemplate(newObj));
			      $("#add_wrap").css("display", "none");
				  $("#m_holder").fadeIn("slow");
			      deleteSong();
	    		});

				//return promise state
			 console.log(">>>>>>>>>>>2", deferred.promise);
			 return deferred.promise;

		}
	});

	//refactored return to a promise with this module
	// return function(){

 // 			//set deffered object
	// 	 	 var deferred = Q.defer();


	// 	 	 if($("#song_name").val() !== "" && $("#artist_name").val() !== "" && $("#album_name").val() !== ""){
	// 			var newObj = {

	// 					"title": $("#song_name").val(),
	// 					"artist":$("#artist_name").val(),
	// 					"album": $("#album_name").val()
				  
	// 			};
	// 		}

	// 	 	 //make ajax call
	// 		 $.ajax({
	// 		 	url: "https://radiant-inferno-9240.firebaseio.com/songs.json",
	// 		 	method: "POST",
	// 		 	data: JSON.stringify(newObj)
	// 		 }).done(function(data){



	// 		 	//resolve promise
	// 		 	deferred.resolve(data);

	// 		 	return data;

	// 		 })

	// 		 //return promise state
	// 		 return deferred.promise;
			 
	//  	}

//});












