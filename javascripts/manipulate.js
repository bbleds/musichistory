define(["jquery"], function($){
	//private vars
	var keyArrObjects=[];
	var secondArrObjects=[];
	var moreSongsWereAdded = false;
	var publicAlbum; 
	var publicArtist;
	var publicKey;


	//public interface

	return{
		getKeyArray : function(){
			return keyArrObjects;
		},

		resetKeyArray : function(value){
			keyArrObjects = value;
		},

		pushKeyArray : function(item){
			keyArrObjects.push(item);
		},

		getSecondArray : function(){
			return secondArrObjects;
		},

		resetSecondArray : function(value){
			secondArrObjects = value;
		},

		pushSecondArray : function(item){
			secondArrObjects.push(item);
		},

		getIfMore : function(){
			return moreSongsWereAdded;
		},

		setIfMore : function(booly){
			moreSongsWereAdded = booly;
		},
	//for filter functionality
		getPublicAlbum: function(){
			return publicAlbum
		},

		setPublicAlbum: function(value){
			publicAlbum = value;
		},

		getPublicArtist: function(){
			return publicArtist;
		},

		setPublicArtist: function(value){
			publicArtist = value;
		},

		getPublicKey: function(){
			return publicKey;
		},

		setPublicKey: function(value){
			publicKey = value;
		}


	};
});
