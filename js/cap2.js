$(document).ready(function(){

  $( '#add' ).click( add_action );
  $( '#rm' ).click( rm_action );
  $( '#nPr' ).click( permutaciones );
  $( '#pnk' ).click( pnk );
  $( '#nCr' ).click( nCr );
});

function add_action(){

  $('#inputs').append('<input type="text" class="form-control number-input" placeholder="n"/>');

}//End of add_action function

function rm_action(){

  $('#inputs input:last').remove();

}//End of rm_action function


function permutaciones(){

  $( '.response_box' ).html( '' );

  var result = rFact( parseFloat( $('#n-input').val() ) ) / rFact( parseFloat( $('#n-input').val() ) - parseFloat( $('#r-input').val() ) );

  $( '.response_box' ).html( 'result : ' +  result );

}//End of set_tree function


function rFact(num){
  if (num === 0){
    return 1;
  }
  else{
    return num * rFact( num - 1 );
  }
}//End of rFact function

function pnk(){

  $( '.response_box' ).html( '' );

  var div = 0;
  var div2 = 1;

  $('#inputs input').each(function(index){

    div2 *= rFact( parseFloat( $(this).val() ) );
    div += parseFloat( $(this).val() );
  });

  $( '.response_box' ).html( 'result : '+ div + '!/' + div2 + ' = ' +  ( rFact( div ) / div2 ) );

}//End of pnk function

function nCr(){

  $( '.response_box' ).html( '' );

  var result = rFact( parseFloat( $('#n-input').val() ) ) / ( rFact( parseFloat( $('#n-input').val() ) - parseFloat( $('#r-input').val() ) ) * rFact( $('#r-input').val() )  );

  $( '.response_box' ).html( 'result : nCr = ' + $('#n-input').val() + '!/(' + $('#n-input').val() + ' - ' + $('#r-input').val() + ')!*' + $('#r-input').val() + '! = ' +  result );

}//End of nCr function
