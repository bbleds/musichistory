app.factory("commonSongs", ["$q", "$http",
  function($q, $http) {

  //private interfacte
  var song_list = [];
  var firstArray;
  var completeArray;
  var secondArray;
  var finalArray;


  // song_list = Object.keys(objectFromJSONFile.songs).map(song => objectFromJSONFile.songs[song]);

  //promise to get songs

      //get songs and place into array
        var getSongs = $q(function(resolve, reject){

          //go get songslist.json file
          $http.get("../../songsList.json")

          .success(

            //if successful
            function(object){
              //do this 
                //this returns an array that can be joined to other array
                console.log("objectFromJsonFile>>>>>>>>>>", Object.keys(object.songs).map(song => object.songs[song]));
              //join this into completeArray
                firstArray = Object.keys(object.songs).map(song => object.songs[song]);

                completeArray = firstArray.join();
            console.log("firstArray", firstArray);

            resolve(object.songs);
            
            //if not successful
          }, function (error){
              //do this 
              reject(error);
            }
          )
        });

         var getSecondSongs = $q(function(resolve, reject){

          //go get songslist.json file
          $http.get("../../moreSongs.json")

          .success(

            //if successful
            function(object2){
              //do this 
              console.log("object from second JSON", object2);
               secondArray = Object.keys(object2.MoreSongs).map(MoreSongs => object2.MoreSongs[MoreSongs]);

              console.log("secondArray ", secondArray);

              var finalArray = firstArray.concat(secondArray);


              song_list = finalArray;

              console.log("song_list ", song_list);

              resolve(object2.MoreSongs);
            
            //if not successful
          }, function (error){
              //do this 
              reject(error);
            }
          )
        });


        //public interface
        return {
          getSongArray: function(){
            console.log("song_list", song_list);
            return song_list;
          },

          getFirstSongs : function(){
            return getSongs;
          },

          getlastSongs : function(){
            return getSecondSongs;
          },

          setSongList : function(value){
            song_list = value;
          },

          pushSongs : function(value){
            song_list.push(value);
          }

        };



}]);