$(function(){
function viewshow(){
}

$('.close').click(function(){
  $('.s_modal').fadeOut();
});
$('.s_item button').click(function(){
  $('.s_modal').fadeIn();
  const ind = $(this).parent('.s_item').index();
  $('.s_modalBox').hide();
  $('.s_modalBox').eq(ind).show();
  $('.s_modalBox').eq(ind).children().show();
  viewshow();
  $('.s_modalBox').eq(ind).children('.s_modal_image').children('.choiceimg').children('li').click(function(){
  const viewimg=$('.s_modalBox').eq(ind).children('.s_modal_image').children('.viewimg').children('li');
  viewimg.fadeOut();
  const idx= $(this).index();
  viewimg.eq(idx).fadeIn();
  });
});

//-----------top button------------
$(window).scroll(function(){
  const ws =$(window).scrollTop();
  if(ws > 400){
  	$('.topmove').css({display:'block'});
  }else {
  	$('.topmove').css({display:'none'});
  };
});



})//ready end

//----------------------javascript---------------------

