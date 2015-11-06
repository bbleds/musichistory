define(["jquery"], 
	function($){

		// handles delete functionality for each delete button on song p tags
		return function(){
					$(".deleteSong").click(function(){
					$(this).parent().remove();
			 	});
		}

})