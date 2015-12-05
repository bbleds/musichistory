
//controller for adding songs
app.controller("addCtrl",  [ "$q", "$http", "$scope", "commonSongs", "$routeParams", "$firebaseArray",
	function($q, $http, $scope, commonSongs, $routeParams, $firebaseArray){
 	$scope.title;
 	$scope.artist;
 	$scope.album;

 	$scope.addToArray = function(){

 		//references firebase
		var songRef = new Firebase("https://radiant-inferno-9240.firebaseio.com/songs");

		//convert firebase data returned into array
		$scope.songs = $firebaseArray(songRef);


		//magigcal angular keyword --> add, adds the following object to firebase
 		$scope.songs.$add(
 		{
 			title: $scope.title,

 			artist: $scope.artist,

 			album: $scope.album

 		}
 		);

 		console.log("commonSongs list", commonSongs.getSongArray());
 	}
}]);