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

function outputSongs(){	
		var targetDiv = document.getElementById("indiv_songs");
		for (var i = 0; i < songs.length; i++){
			songs[i] = songs[i].replace(/[^a-zA-Z" ">-]/g, "");
			songs[i] = songs[i].replace(/[>]/g, "-");
			console.log(songs[i]);
			targetDiv.innerHTML += "<p>"+songs[i]+"</p>";
		}
}

outputSongs();

//  Now, the entire container for the form should not be displayed when the user first visits your page. The song list with the corresponding form should be visible.
// When the user clicks on "Add Music", the list view should be hidden, and the music form should show.
// When the user clicks on "List Music", the music form should be hidden, and the list view should show.
// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

var addMusic = document.getElementById("add_music");
var listMusic = document.getElementById("list_music");
var addBtn = document.getElementById("addSong");

function showAdder(){
	var inputDiv = document.getElementById("add_wrap");
	var songdiv = document.getElementById("indiv_songs");
	inputDiv.classList.remove("add_vis");
	songdiv.classList.add("add_vis");
}

function showList(){
	var inputDiv = document.getElementById("add_wrap");
	var songdiv = document.getElementById("indiv_songs");
	inputDiv.classList.add("add_vis");
	songdiv.classList.remove("add_vis");
}

function clearInputs(){
	document.getElementById("song_name").value = "";
  	document.getElementById("artist_name").value = "";
	document.getElementById("album_name").value = "";
}

/* Once the user fills out the song form and clicks the add button, you should collect 
   all values from the input fields, add the song to your array of songs, and update the song list in the DOM.*/

  function appendSong(){
  	var songName = document.getElementById("song_name").value;
  	var artistName = document.getElementById("artist_name").value;
  	var albumName  = document.getElementById("album_name").value;
  	var inputDiv = document.getElementById("add_wrap");
	var songdiv = document.getElementById("indiv_songs");
  	if(song_name !== "" && artistName !== "" && albumName !== ""){
  		songs = [];
  		songs[songs.length] = songName + " - by "+ artistName +" on the album "+albumName;
  		outputSongs();

  		clearInputs();
		inputDiv.classList.add("add_vis");
		songdiv.classList.remove("add_vis");

  	}
  }


addMusic.addEventListener("click", showAdder);
listMusic.addEventListener("click", showList);
addBtn.addEventListener("click", appendSong);







