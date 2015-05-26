$(function(){

  //console.log('The dom is ready! (drill 3)');

	//Random color change
	$('.shape').hover(function(){
		$(this).removeClass('ball');
		setRandomBackground(this);
	},function(){
		$(this).addClass('ball');
		setRandomBackground(this);
	});
});

var setRandomBackground = function(obj){
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	$(obj).css('background','rgba('+r+','+g+','+b+',1)');
}

//===================================

//Not random color change
// 	$('.ball').hover(function(){
// 		$('.ball')
// 			.css('border-radius', 0)
// 			.css('background-color', '#44CC50');
// 		}, function () {
// 		$('.ball')
// 			.css('border-radius', 50)
// 			.css('background-color', '#4444CC');
// 		}	//alert("hover");
// 	);

// });


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