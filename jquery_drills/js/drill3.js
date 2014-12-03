$(function(){


    console.log('The dom is ready! (drill 3)');
    
	$('.ball').hover(function(){
		$('.ball')
			.css('border-radius', 0)
			.css('background-color', '#44CC50');
		}, function () {
		$('.ball')
			.css('border-radius', 50)
			.css('background-color', '#4444CC');	
		}	//alert("hover");
	);

});




//http://api.jquery.com/hover/#hover-handlerIn-handlerOut
// <script>
// $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span:last" ).remove();
//   }
// );
 
// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });
// </script>