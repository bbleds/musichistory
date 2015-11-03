requirejs.config({
  baseUrl: "../musichistory",
  paths:{
    "jquery": "/lib/bower_components/jquery/dist/jquery.min",
    "bootstrapCss": "/lib/bower_components/bootstrap/dist/css/bootstrap.min.css",
    "bootstrapJs": "/lib/bower_components/bootstrap/dist/css/bootstrap.min.js"
  }
});

//WAT does this mean? --> what if I require something inside the function? Multiple require keywords?
require(
  ["songs"], 
  function(maker) {
  	//loads songs.js which is backbone of app
  }
);