
$(document).ready(function(){

  $( '#add' ).click( add_action );
  $( '#rm' ).click( rm_action );
  $( '#doneMedia' ).click( media_action );
  $( '#doneMediana' ).click( mediana_action );
  $( '#doneVarianza' ).click( varianza_action );
  $( '#doneDesviacion' ).click( desviacion_action );

});

function add_action(){

  $('#inputs').append('<input type="text" class="form-control number-input" placeholder="n"/>');

}//End of add_action function

function rm_action(){

  $('#inputs input:last').remove();

}//End of rm_action function

/*
* media_action
* function that calculates the media from an array of data
*/
function media_action(){

  $( '.response_box' ).html( '' );

  var result = 0;
  var cont = 0;

  $('#inputs input').each(function(index){

    result += parseFloat( $(this).val() );
    $( '.response_box' ).append( 'element ' + index + ' = ' + $(this).val() + ' +  <br />' );
    cont++;

  });

  $('.response_box').append( 'result = ' + result + ' / ' + cont + ' = ' + ( result / cont ) );

}//End of media_action function

/*
* mediana_action
* function that calculates the mediana from an array of data
*/
function mediana_action(){

  var result = new Array();
  var media = 0;

  $( '.response_box' ).html( '' );

  $('#inputs input').each(function(index){

    result.push( parseFloat( $(this).val() ) );

  });

  result.sort(function(a,b){return a - b});

  result.forEach(function(entry) {

    $( '.response_box' ).append( entry + ' <br />' );

  });

  if( result.length % 2 == 0 ){
    media = ( result[(result.length/2)] + result[(result.length/2)-1] ) / 2;
  }else{
    media = result[parseInt(result.length/2)];
  }

  $( '.response_box' ).append( 'media = ' + media );

}//End of mediana_action function

/*
* varianza_action
* function that calculates the varianza from an array of data
*/
function varianza_action(){

  $( '.response_box' ).html( '' );

  var media = 0;
  var cont = 0;
  var result = 0;
  $('#inputs input').each(function(index){

    media += parseFloat( $(this).val() );
    cont++;

  });

  media /= cont;

  $('#inputs input').each(function(index){

    result += Math.pow( ( parseFloat( $(this).val() ) - media ), 2 );
    $( '.response_box' ).append( 'i:' + index + ' = (' + $(this).val() + ' - ' + media + ')^2 + {' + result + '}<br />' );

  });

  $( '.response_box' ).append( 'result s^2= ' + result + '/' + ( cont-1 ) + ' = ' + ( result / ( cont - 1 ) )  );

}//End of varianza_action function

/*
* desviacion_action
* function that calculates the desviacion from an array of data
*/
function desviacion_action(){

  $( '.response_box' ).html( '' );

  var media = 0;
  var cont = 0;
  var result = 0;

  $('#inputs input').each(function(index){

    media += parseFloat( $(this).val() );
    cont++;

  });

  media /= cont;

  $('#inputs input').each(function(index){

    result += Math.pow( ( parseFloat( $(this).val() ) - media ), 2 );
    $( '.response_box' ).append( 'i:' + index + ' = (' + $(this).val() + ' - ' + media + ')^2 + {' + result + '}<br />' );

  });

  $( '.response_box' ).append( 's^2= ' + result + '/' + ( cont-1 ) + ' = ' + ( result / ( cont - 1 ) ) + '<br />' );

  $( '.response_box' ).append( 's = sqrt(' + result + '/' + ( cont-1 ) + ') = ' + Math.sqrt( result / ( cont - 1 ) )  );

}//End of desviacion_action function
