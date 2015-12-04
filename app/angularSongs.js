var app = angular.module("songApp", ["ngRoute"]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/songs/list', {
        templateUrl: 'partials/allSongsOutput.html',
        controller: 'listCtrl'
      })
      .when('/songs/add', {
      	templateUrl: "partials/addSongForm.html",
      	controller: "addCtrl"
      })
      .otherwise('/songs/list');
  }]);


//goals, put all common data that needs to be shared into a factory, and then get that data out in all other modules

	//steps
		// 1) Get songs with promises and store them inside a variable in the factory
		// 2) define variables inside the factory that will hold our array and push things into said array
		// 3) get songs variable and push new added song into it, 
		// 4) output the array when list is loaded