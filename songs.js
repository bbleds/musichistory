/*Requirements

Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

Each student must add one song to the beginning and the end of the array.
Loop over the array and remove any words or characters that obviously don't belong.
Students must find and replace the > character in each item with a - character.
Must add each string to the DOM in index.html in the main content area.

{Song name} by {Artist} on the album {Album}

*/


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Each student must add one song to the beginning and the end of the array.
songs.unshift("Levels - by Avivii on the album True");
songs.push("Fractals - by Seven Lions on the album Days to Come");

//Loop over the array and remove any words or characters that obviously don't belong.
	
var targetDiv = document.getElementById("main_right_sidebar");
for (var i = 0; i < songs.length; i++){
	songs[i] = songs[i].replace(/[^a-zA-Z" ">-]/g, "");
	songs[i] = songs[i].replace(/[>]/g, "-");
	console.log(songs[i]);
	targetDiv.innerHTML += "<p>"+songs[i]+"</p>";
	
}

//  Now, the entire container for the form should not be displayed when the user first visits your page. The song list with the corresponding form should be visible.
// When the user clicks on "Add Music", the list view should be hidden, and the music form should show.
// When the user clicks on "List Music", the music form should be hidden, and the list view should show.
// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

var addMusic = document.getElementById("add_music");
function showAdder(){
	var inputDiv = document.getElementById("add_wrap");
	inputDiv.classList.toggle("add_vis");
}

add_music.addEventListener("click", showAdder);
