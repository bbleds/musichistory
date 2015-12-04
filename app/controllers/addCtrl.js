
//controller for adding songs
app.controller("addCtrl", ["commonSongs", "$scope",
 function(commonSongs, $scope){
 	$scope.title;
 	$scope.artist;
 	$scope.album;

 	$scope.addToArray = function(){


 		commonSongs.pushSongs(
 		{
 			title: $scope.title,

 			artist: $scope.artist,

 			album: $scope.album

 		}
 		);

 		console.log("commonSongs list", commonSongs.getSongArray());
 	}
}]);