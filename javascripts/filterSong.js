define(["jquery", "manipulate", "filterAlbumCallback"], function($, manipulate, filterAlbumCallback){

	return {

		filterSong:function(){
		$.ajax({
				//url: "songsList.json"
				url:"https://radiant-inferno-9240.firebaseio.com/.json"
				//pass data to callbackOne function reference
			}).done(filterAlbumCallback);

	  }

	}
});