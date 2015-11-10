define(["jquery", "manipulate", "filterAlbumCallback", "filterArtistCallback"], function($, manipulate, filterAlbumCallback, filterArtistCallback){

	return {

		filterAlbum:function(data){
		
		filterAlbumCallback(data);

	  	},

	  filterArtists:function(data){
		
		filterArtistCallback(data);

	  }

	}
});