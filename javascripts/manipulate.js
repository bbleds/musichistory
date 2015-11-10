define(["jquery"], function($){
	//private vars
	var firstArrObjects=[];
	var secondArrObjects=[];
	var moreSongsWereAdded = false;
	var publicAlbum; 
	var publicArtist;


	//public interface

	return{
		getFirstArray : function(){
			return firstArrObjects;
		},

		resetFirstArray : function(value){
			firstArrObjects = value;
		},

		pushFirstArray : function(item){
			firstArrObjects.push(item);
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
		}


	};
});
