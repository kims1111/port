function round(){
  skill(95,'.html')
  skill(95,'.css')
  skill(90,'.jquery')
  skill(90,'.javascript')
  skill(90,'.photoshop')
  skill(85,'.illustrator')
  skill(70,'.php')
  function skill(max,cls){
    let i=1;
    const sk1=setInterval(function(){
    if(i<=max){
      s_color(i,cls);
      numup(i,cls);
      ++i;
    }else {
      clearInterval(sk1);
    }
    function s_color(i,cls){
      $(cls).children('.graph').css({width: i+'%',background:'#fecd1a',height:'100%',borderRadius:'0 50px 50px 0'});
    }
    function numup(i,cls){
      $(cls).children('div').children('span').html(i+'%')
    }
  },20);
  }
}

$(document).ready(()=>{
    var skillcont = true;
    var contactcont = true;
    $(window).scroll(()=>{
        let ws = $(window).scrollTop();
        if(ws > 100) {
            $('header').css({opacity:1});
            $('header h1 > a').css({color:'#000'});
        }else {
            $('header').css({opacity:0.5});
            $('header h1 > a').css({color:'#ff0000'});
        }
        
        if(ws > $('#About').offset().top -100){
          $('.gnb > li').siblings().children('a').css({color:'#333'});
          $('.gnb > li:first > a').css({color:'#ff0000'});
          $('.aboutBox').animate({opacity:1},300,()=>{
            $('.leftAbout').animate({opacity:1},500,()=>{
              $('.centerAbout').animate({opacity:1},500,()=>{
                $('.rightAbout').animate({opacity:1},500)
              });
            });
          });
        }

        if(ws > $('#Skill').offset().top - 100){
          $('.gnb > li').siblings().children('a').css({color:'#333'});
          $('.gnb > li').eq(1).children('a').css({color:'#ff0000'});
          if(skillcont == true){
            round();
            skillcont = false;
            setTimeout(()=>{$('.pointText').animate({top:0,opacity:1},1000)},500);
          }
        }

        if(ws > $('#Work').offset().top - 100) {
          $('.gnb > li').siblings().children('a').css({color:'#333'});
          $('.gnb > li').eq(2).children('a').css({color:'#ff0000'});
          $('.workContent').animate({top:0,opacity:1})
        }
        
        if(ws > $('#contact').offset().top - 100) {
          $('.gnb > li').siblings().children('a').css({color:'#333'});
          $('.gnb > li').eq(3).children('a').css({color:'#ff0000'});
            if(contactcont == true){
              $('#contact h3').animate({opacity:1, top:0},1000,()=>{
                $('#contact h3').css({opacity:0, top:'-50px'});
                $('#contact h3').text('포트폴리오가 마음에 드셨다면 연락주세요!');
                $('#contact h3').animate({opacity:1,top:0},1000,()=>{
                  $('#contact h3').css({display:'none'});
                  $('.contactBox').css({display:'flex'}).animate({opacity:1});

                });
              });
              contactcont=false;
            }
        }
    });

    $('#index_cont01 > h2').animate({opacity:1, top:0},1000,()=>{
        $('#index_cont01 > h2').css({opacity:0, top:'-50px'});
        $('#index_cont01 > h2').text('포트폴리오에 오신것을 환영합니다!');
        $('#index_cont01 > h2').animate({opacity:1,top:0},1000,()=>{
          $('#index_cont01 > h2').css({opacity:0, top:'-50px'});
          $('#index_cont01 > h2').text('마우스 스크롤을 내려주세요~');
          $('#index_cont01 > h2').animate({opacity:1,top:0},1000);
        });
        
    });
    if($(window).width() > 991){
      $('.workContent').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
      });
    } else {
      $('.workContent').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
      });
    }

    $(".gnb li > a").click(function(e){            
      e.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
  
});


 
