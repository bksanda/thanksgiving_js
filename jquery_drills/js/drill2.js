$(function(){


    console.log('The dom is ready! (drill 2)');
    
    var minusDir = '-';
    var addDir = "+";

    $(document).on('keyup',function(event){
        //output to console which key was pressed

        if (event.keyCode === 37) /*left*/ {
        	$('.shape').animate({
        		"left": minusDir+"="+10
      		});
        } 
        else if (event.keyCode === 39) /*right*/ {
			$('.shape').animate({
        		"left": addDir+"="+10
        	});
        } 
        else if (event.keyCode === 38) /*bottom*/ {
			$('.shape').animate({
        		"top": minusDir+"="+10
        	});
        } 
        else if (event.keyCode === 40) /*top*/ {
			$('.shape').animate({
        		"top": addDir+"="+10
        	});
		}
		else if (event.keyCode === 83) /*s key*/ {
			alert ("S key");
			for (var i = 1; i <= 3; i++) {
            	$('.shape')
            	.animate({ left: -10 }, 10)
            	.animate({ left: 0 }, 50) //50
            	.animate({ left: 10 }, 10)
            	.animate({ left: 0 }, 50); //50
        		}
			}
		})

// -390, -10  bottom left corner
// -10, 10 top left corner
// 790, 10 top right corner
// 790, -390 bottom right corner
  		
        console.log('The user pressed key: ',event.keyCode);
    });
