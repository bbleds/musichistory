define(["jquery"], function($){
	//private variables
	var firstArrObjects=[];
	var secondArrObjects=[];
	var moreSongsWereAdded = false;

	// return and object with methods to interact with the private variables above
	return {

		getFirstArrayObjects: function(){
			return firstArrObjects;
		},

		emptyFirstArrayObjects : function(what){
			firstArrObjects = what;
		},

		pushFirstArrayObjects : function(item){
			firstArrObjects.push(item);
		},

		getSecondArrayObjects : function(){
			return secondArrObjects;
		},

		pushSecondArrayObjects : function(item){
			secondArrObjects.push(item);
		},

		setIfAdded : function(value){
			moreSongsWereAdded = value;
		},

		seeIfAdded : function(){
			return moreSongsWereAdded;
		}
	}
});