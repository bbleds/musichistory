/*var hoursInADay = 24;
console.log("hoursInADay : ",hoursInADay);
var daysInYear = 365;
console.log("daysInYear : ",daysInYear);
var minsInHour = 60;
console.log("minsInHour : ",minsInHour);
var secondsInHour = 60;
console.log("secondsInHour : ",secondsInHour);
var decadeYears = 10;
console.log("decadeYears : ",decadeYears);



//How many hours are in a year
var hoursInYear = hoursInADay * daysInYear;
console.log("hoursInYear: ", hoursInYear);

//Minutes in a decade
var minsInDecade = (hoursInADay*minsInHour)*decadeYears;
console.log("minsInDecade: ", minsInDecade);

//seconds old I am 
var secondsIAm = (hoursInADay*minsInHour*secondsInHour*daysInYear) * hoursInADay;
console.log("secondsIAm: ", secondsIAm);

//Old or young
var age = 24;

if (age < 50){
	console.log("You are young");
} else {
	console.log("You are old");
}

// for loops ---

for (var counter = 0; counter < 200; counter +=10){
	console.log(counter);
}



for (var counter = 1024; counter >= 2; counter = counter /2){
	console.log(counter);
}

//augment loop to insert into array 
var myArr = [];
for (var counter = 1024; counter >= 2; counter = counter -50){
	myArr.push("my value is " + counter);
	console.log(myArr[counter]);
}


//Write a loop that starts at 100 and decrements a variable by 1. If the number is even, add the number to the beginning of an array, else add it to the end of the array.
var theSpeciArr = [];
for (var i = 100; i >= 0; i --){
	if(i%2 === 0)	{
		theSpeciArr.unshift(i);
	} else{
		theSpeciArr.push(i);
	}
}

console.log(theSpeciArr); 

var container = document.getElementById("container");
console.log(container);

container.innerHTML = "I looooooooove NSS";*/

// ================================================== sonnet ==============================
/*
  2. Find and output the starting position of the word "orphans"
  3. Output the number of characters in the sonnet
  4. Replace the first occurance of the string "winter" with "yuletide"
  5. Replace all occurances of the string "the" with "a large"
  6. Set the content of the sonnet div with the new string
*/

	var sonnetElement = document.getElementById("sonnet");
	var sonnetText = sonnetElement.innerHTML;
	var indexOfOrphans = sonnetText.indexOf("orphans");
	console.log(indexOfOrphans);
	console.log("length of sonnet", sonnetText.length);
	sonnetText = sonnetText.replace("winter","youletide");
	sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");
  //global replace











