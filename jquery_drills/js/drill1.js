$(function(){


    console.log('The dom is ready! (drill 1)');
    
    var dir = Math.random() > 0.49 ? '+' : '-';

    $('.shape').on('click', function() {
    	$(this)
    		.fadeOut()
    		.animate({
    			'left':dir+'='+(Math.random() * 100)
    		})
    		.fadeIn();
    })
    	
});


// -390, -10  bottom left corner
// -10, 10 top left corner
// 790, 10 top right corner
// 790, -390 bottom right corner