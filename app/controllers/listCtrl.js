//add initial ctrlr --> gets songs from firebase
app.controller("listCtrl", [ "$q", "$http", "$scope", "commonSongs", "$routeParams", "$firebaseArray",
	function($q, $http, $scope, commonSongs, $routeParams, $firebaseArray){

	$scope.test = "ben";
	$scope.ArrayOfSongs;
	$scope.searchArtist;
	$scope.searchAlbum;
	
	$scope.removeSong = function(song){

		console.log("firebaseArray ", songRefArray );

		var indexToSplice = $scope.ArrayOfSongs.indexOf(song);

		songRefArray.$remove(songRefArray[indexToSplice]);
		// console.log("song", song);


		// console.log("index of tha ", indexToSplice);

		// $scope.ArrayOfSongs.splice(indexToSplice, 1);

		// console.log("nehw resuhlt ", $scope.ArrayOfSongs);

		// $scope.ArrayOfSongs.$remove($scope.ArrayOfSongs[indexToSplice]);



	};


	//Lets get songs from firebase -->

		//references firebase
		var songRef = new Firebase("https://radiant-inferno-9240.firebaseio.com/songs");

		//convert firebase data returned into array
		var songRefArray = $firebaseArray(songRef);

		//log the data returned
		console.log("songRefArray", songRefArray);



		//when array is loaded,
		songRefArray.$loaded()

		//then
		.then(function(data){


			//display the data
			console.log("data", data);

			//set the songs as an array to output
			$scope.ArrayOfSongs = data;

		});


	// commonSongs.getSongArray();

	// console.log("commonSongs array", commonSongs.getSongArray().length);

	// if (commonSongs.getSongArray().length === 0){

	// commonSongs.getFirstSongs()

	// .then(function(data){

	// 	console.log("data >>>>>>>>>>>>>>>>", data);


	// 	$scope.ArrayOfSongs =  Object.keys(data).map(song => data[song]);


	// 	return commonSongs.getlastSongs()

	// })

	// .then(function(data2){

	// 		console.log("now in the data2 promise");

	// 		console.log("data2 >>>>>>>>>>>>>>>>>", data2);

	// 		console.log("ArrayOfSongs", $scope.ArrayOfSongs);

	// 		$scope.ArrayOfSongs = $scope.ArrayOfSongs.concat(data2);

	// 		console.log("ArrayOfSongs with final concat", $scope.ArrayOfSongs);

	// 		commonSongs.setSongList($scope.ArrayOfSongs);

	// 		console.log("commonSongs list", commonSongs.getSongArray());

	// 	});

	// } else {

	// 	$scope.ArrayOfSongs = commonSongs.getSongArray();

	// }

	//this module should output the list from commonSongs



}]);