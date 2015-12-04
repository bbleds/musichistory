var app = angular.module("songApp", 
	["firebase","ngRoute"]);


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
      .when('/songs/:songId', {
      	templateUrl: "partials/songDetail.html",
      	controller: 'songDetail'
      })
      .otherwise('/songs/list');
  }]);


//goals, put all common data that needs to be shared into a factory, and then get that data out in all other modules

	//steps
		// 1) Get songs with promises and store them inside a variable in the factory
		// 2) define variables inside the factory that will hold our array and push things into said array
		// 3) get songs variable and push new added song into it, 
		// 4) output the array when list is loaded

//Goals: adding references to firebase with angularFire

      // 1) link to firebase and pass in all references to firebase etc that are dependencies ( firebase and firebaseArrays, we can simply add a script tag for angular fire which modifies the firebase object)
      // 2) create a reference to the firebase for pulling in songs
	  // 3) create a reference to firebase for adding songs
	  // 4) view each individual song

	  // Goal for iindiviudal song view
	  	// 1) Make a songDetail partial
		// 2) make a songDetail controller
		// 3) make a dynamic route


//add song functionality