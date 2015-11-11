requirejs.config({
  baseUrl: "./javascripts",
   shim : {
        bootstrapJs : {
            deps : [ 'jquery'],
            exports: 'Bootstrap'
        }
      },

  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrapJs": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase": "https://cdn.firebase.com/js/client/2.2.1/firebase"
  }
});

//WAT does this mean? --> what if I require something inside the function? Multiple require keywords?
require(
  ["songs", "bootstrapJs"], 
  function(maker) {
    //loads songs.js which is backbone of app
    console.log("Booyah");
  }
);