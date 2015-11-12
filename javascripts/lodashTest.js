define(["jquery", "lodash"], 
function($, _){
	
	return function(){

		// //return array in chunks of 2
		// var myArray = [1,2,3,4,5,6];
		// console.log(_.chunk(myArray,2));


		// //return uniqe items
		// var mySecondArray = [1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3];
		// console.log(_.uniq(mySecondArray));



		// //return any user with age = ageToCompare
		// var ageToCompare = 17;

		// var myUsers = {
		//   'trevor':  { 'age': 17,  'active': true },
		//   'jenny':  { 'age': 17,  'active': true },
		//   'barney':  { 'age': 36, 'active': true },
		//   'fred':    { 'age': 40, 'active': false },
		//   'pebbles': { 'age': 1,  'active': true }
		// };

		// console.log(_.findKey(myUsers, function(chr) {
		//   return chr.age = ageToCompare;
		// }));

		// // --> this returns trevor



		// //filter array
		// console.log(_.filter([4, 5, 6, "truthy"], function(n) {
		//   return n === "truthy";
		// }));


		// //loop x times
		// _.times(5, function(){
  //   		console.log("meh");
		// });

		var users = [
		  { 'user': 'barney',  'age': 36 },
		  { 'user': 'pebbles', 'age': 17 },
		  { 'user': 'pebbles', 'age': 40 }
		];

		var chained = _.chain(users);
		console.log("chained is");

		//for everything in users object, for every unique user, get the age
		console.log(_.chain(users).uniq("user").pluck("age").value());

	}
	

});