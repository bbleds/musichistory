app.controller("songDetail", [ "$scope", "$routeParams", "$firebaseArray",
	function($scope, $routeParams, $firebaseArray){

	//This is the ctrlr for showing individual song details
	 var ref = new Firebase("https://radiant-inferno-9240.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

    console.log("scope songs", $scope.songs);


  	//when data is loaded
  	$scope.songs.$loaded().then(function(){
  		console.log("hey hey hey hey");

  		$scope.songId = $routeParams.songId;

	    //current song details
	    $scope.CurrentSong = $scope.songId;

		$scope.selectedSong = $scope.songs.$getRecord($scope.CurrentSong);

		console.log("selected song ", $scope.selectedSong);

  	});


}]);