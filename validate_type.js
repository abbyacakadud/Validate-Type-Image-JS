$(document).ready(function(){    
	$('#save').click(function(){
	 var file = $('#image').val();
	 var exts = ['jpg']; 
      		if ( file ) { 
        	  var get_ext = file.split('.'); 
        	  get_ext = get_ext.reverse(); 
        		if ( $.inArray ( get_ext[0].toLowerCase(), exts ) > -1 ){
          		  return true;
        		} else {
          		  alert( 'Type must .jpg' );
        		}
      		}
      		else
      		{
		  alert('Choose Image');
		 }
		  return false;
	});
});
 
