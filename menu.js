$(document).ready(function(){

  $('#cap1').click( function(){ ajax_function( '/Estadistica/cap1/Views/cap1.html' ) } );
  $('#cap2').click( function(){ ajax_function( '/Estadistica/cap1/Views/cap2.html' ) } );
  $('#cap3').click( function(){ ajax_function( '/Estadistica/cap1/Views/cap3.html' ) } );

});


function ajax_function( url ){

  $.ajax({
    url : url,
    cache : false,
    success : function( response ){
      $('.content').html(response);
    },
    error : function( error ){
      alert( "url not found" );
    }
  });

}//End of ajax_function function
