$(function(){

  //console.log('The dom is ready! (drill 4)');

  $('.task-list li').hover(function(){
  		$(this).addClass('fade');
  	},function(){
  		$(this).fadeOut(100);
  		$(this).fadeIn(500);
  })

  $('.task-list').find('li').on('click',function(){

  	switch($(this).index()){
  		case 0:
  			$('.stage').find('div').first().hide();
  			break;
  		case 1:
  			$('.stage').find('div').first().find('ul').first().hide();
  			break;
  		case 2:
  			$('.stage div#second ul').first().hide();
  			break;
  		case 3:
  			$('.stage div#second').hide();
  			break;
  		case 4:
  			$('.stage div#second ul>li').eq(3).hide();
  			break;
  		case 5:
  			$('.stage div#first ul>li').first().hide();
  			break;
  		case 6:
  			$('.stage div').first().css('background-color','red');
  			break;
  		case 7:
  			$('.stage div#first ul').eq(1).css('background-color','red');
  			break;
  		case 8:
  			$('.stage ul li:nth-child(2)').css('background-color','red');
  			break;
  		case 9:
  			$('.stage div#second').delay(5000).fadeOut();
  			break;
  		case 10:
  			$('.stage ul li:nth-child(1)').remove();
  			break;
  		case 11:
  			$('.stage #first ul').eq(1).append('<li>New Item</li>');
  			break;
  		case 12:
  			$('.stage>div>ul').append('<li>New Item</li>');
  			break;
  		case 13:
  			$('.stage #first ul').eq(1).appendTo('#second');
  			break;
  	}
  	$(this).css('color','red');
  });

	$('#first li').on('click',function(){
		$(this).delay(3000).fadeOut();
	});

	$('#second>ul>li').on('click',function(){
		$(this).find('ul').slideToggle();
	})

});


// ==============================================================
  //Below are the answers before fully understanding the question:
  //0,1) Hide the first div
  //$('#first').hide();

  //1,2) Hide the first list in the first div
  //$('#first > ul.first > li').hide();

	//2,3) Hide the first list in the second div
	//$('#second > ul.first > li.first').hide();

	//3,4) Hide the second div
	//$('#second').hide();

	//4,5) Hide the third item of the third list
	//$('#second > ul.first > li.third').hide();

	//5,6) Hide the first item of the first list in the first div
	//$('#first > ul.first > li.first').hide();

	//6,7) Set a red background on the first div
	//$('#first').css('background', 'red');

	//7,8) Set a red background on the second list in the first div
	//$('#first > ul.second').css('background', 'red');

	//8,9) Set a red background on the second item of every list
	// Need to figure out the last two...
	// $('#first > ul.first > li.second').css('background', 'red');
	// $('#first > ul.second > li.second').css('background', 'red');
	// $('#second > ul.first > li.first > ul > li').css('background', 'red');
	// $('#second > ul.first > li.second > ul > li').css('background', 'red');
	// $('#second > ul.first > li.third > ul > li').css('background', 'red');

	//9,10)Fade out the second div after 5 seconds
	//$('#second').fadeOut(5000);

	//10,11)Remove the first item of every list from the DOM (no hiding)


	//11,12)Add a fourth item to the second list in the first div

	//12,13)Add a fourth item to all three lists (with one function call)

	//13, 14)Remove the second list from the first div and add it back to the second div

	//15)Remove any element that is clicked on

	//16)Remove any element in the first div that is clicked on

	//17) Fade out any element that is clicked, after 3 seconds


