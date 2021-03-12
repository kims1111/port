$(function(){


	function slide(){
		$('.slide').animate({marginLeft:'-100%'},800, function(){
			$('.slide li:first').appendTo('.slide');
			$('.slide').css({marginLeft:0});
	
	});
  }
  setInterval(slide,3000);

$('.cho_box > a > img').hover(function(){
  const cho_src=$(this).attr('src').split('.')[0];
  $(this).attr('src', cho_src+'_1.jpg');
},function(){
  const cho_src=$(this).attr('src').split('_')[0];
  $(this).attr('src', cho_src+'.jpg');
});

$('.cho_box1 > a > img').hover(function(){
  const cho_src=$(this).attr('src').split('.')[0];
  $(this).attr('src', cho_src+'_1.jpg');
},function(){
  const cho_src=$(this).attr('src').split('_')[0];
  $(this).attr('src', cho_src+'.jpg');
});
$('.choice > div').click(function(){
	$('.choice > button').show();
	$(this).css({filter:'none'})
});
$('.footwear').click(function(){
	$(this).siblings('div').css({display:'none'});
	$('.ft').css({display:'flex'}).siblings('.ct, .ac').hide();
});
$('.clothing').click(function(){
	$(this).siblings('div').css({display:'none'});
	$('.ct').css({display:'flex'}).siblings('.ft, .ac').hide();;
});
$('.accessories').click(function(){
	$(this).siblings('div').css({display:'none'});
	$('.ac').css({display:'flex'}).siblings('.ct, .ft').hide();;
});

$('.choice > div > span').click(function(){
	$('.choice > div > span').css({filter:'brightness(30%)', color:'#000', borderBottom:'2px solid #000'});
	$(this).css({filter:'none', color:'#feae0f', borderBottom:'2px solid #fa0', textShadow:'1px 1px 0 #afae0f' });
});

const ftslide = setInterval(function(){
  $('.choice1.ft').animate({marginLeft:'-50%'},800,function(){
  	$('.ft > div:first').appendTo('.ft');
  	$('.choice1').css('margin-left',0);
  });//choice1 animate end
},3000);

const ctslide = setInterval(function(){
  $('.choice1.ct').animate({marginLeft:'-50%'},800,function(){
  	$('.ct > div:first').appendTo('.ct');
  	$('.choice1').css('margin-left',0);
  });//choice1 animate end
},3000);
const acslide = setInterval(function(){
  $('.choice1.ac').animate({marginLeft:'-50%'},800,function(){
  	$('.ac > div:first').appendTo('.ac');
  	$('.choice1').css('margin-left',0);
  });//choice1 animate end
},3000);
$('.choice1').mousedown(function(){
	clearInterval(ftslide);
	clearInterval(ctslide);
	clearInterval(acslide);
})
if($(window).width() > 680){
	clearInterval(ftslide);
	clearInterval(ctslide);
	clearInterval(acslide);}
//---------------------shop-----------

$('.shop > div').click(function(){
	$('.shop > div > div').css({display:'none'})
	$(this).children('div').css('display','block');
});
if($(window).width() > 680) {
	$('.shop > div').click(function(){
		$(this).children('div').css({
			position:'absolute',
			top:0,
			left:0
	    });
	});
}

//-----------top button------------
$(window).scroll(function(){
  const ws =$(window).scrollTop();
  if(ws > 400){
  	$('.topmove').css({display:'block'});
  }else {
  	$('.topmove').css({display:'none'});
  };
});

//-------------------------sub --------------------------------
$('.shoesModal > button').click(function(){
  $('.shoesModal').hide();
});
$('.item > button').click(function(){
  $('.m_itemimg > ul > li').hide();
  const b_index =$(this).parent('div').index();
  $('.shoesModal').show();
  $('.itemModal').eq(b_index).show().siblings('div').hide();
  const itemmodal = $('.itemModal').eq(b_index);
  $('.itemModal').eq(b_index).children('.m_itemimg').children('ul').children('li:first').show();
  $(itemmodal).children('.m_itemimgshow').children('ul').children('li').click(function(){
	const idx = $(this).index();
	const itemimgshow = itemmodal.children('.m_itemimg').children('ul').children('li');
    itemimgshow.fadeOut();
    itemimgshow.eq(idx).fadeIn();
  });
});

$('.clothesModal > button').click(function(){
  $('.clothesModal').hide();
});
$('.c_item > button').click(function(){
  $('.m_itemimg > ul > li').hide();
  const c_index =$(this).parent('div').index();
  $('.clothesModal').show();
  $('.clothesModal > .itemModal').eq(c_index).show().siblings('div').hide();
  const c_itemmodal = $('.clothesModal > .itemModal').eq(c_index);
  $('.clothesModal > .itemModal').eq(c_index).children('.m_itemimg').children('ul').children('li:first').show();
  $(c_itemmodal).children('.m_itemimgshow').children('ul').children('li').click(function(){
	const idx = $(this).index();
	const c_itemimgshow = c_itemmodal.children('.m_itemimg').children('ul').children('li');
    c_itemimgshow.fadeOut();
    c_itemimgshow.eq(idx).fadeIn();
  });
});



})//ready end

//----------------------javascript---------------------
