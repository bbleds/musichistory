//add initial ctrlr
app.controller("listCtrl", [ "$q", "$http", "$scope", "commonSongs",
	function($q, $http, $scope, commonSongs){

	$scope.test = "ben";
	$scope.ArrayOfSongs;
	$scope.searchArtist;
	$scope.searchAlbum;
	
	$scope.removeSong = function(song){
		console.log("song", song);
		console.log("index of tha ", $scope.ArrayOfSongs.indexOf(song));
	};

	commonSongs.getSongArray();

	console.log("commonSongs array", commonSongs.getSongArray().length);

	if (commonSongs.getSongArray().length === 0){

	commonSongs.getFirstSongs()

	.then(function(data){

		console.log("data >>>>>>>>>>>>>>>>", data);


		$scope.ArrayOfSongs =  Object.keys(data).map(song => data[song]);


		return commonSongs.getlastSongs()

	})

	.then(function(data2){

			console.log("now in the data2 promise");

			console.log("data2 >>>>>>>>>>>>>>>>>", data2);

			console.log("ArrayOfSongs", $scope.ArrayOfSongs);

			$scope.ArrayOfSongs = $scope.ArrayOfSongs.concat(data2);

			console.log("ArrayOfSongs with final concat", $scope.ArrayOfSongs);

			commonSongs.setSongList($scope.ArrayOfSongs);

			console.log("commonSongs list", commonSongs.getSongArray());

		});

	} else {

		$scope.ArrayOfSongs = commonSongs.getSongArray();

	}

	//this module should output the list from commonSongs



}]);