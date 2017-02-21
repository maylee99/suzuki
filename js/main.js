// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';
   /* ==============================================
   bootstrap carousel
    =============================================== */ 
   $(function(){
    var $item = $('.carousel .item'); 
    var $wHeight = $(window).height();
    $item.height($wHeight); 
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
      var $src = $(this).attr('src');
      var $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
      });
      $(this).remove();
    });

    //下方自動加入控制圓鈕
    var total = $('.carousel .carousel-inner div.item').size();
    append_li();
    function append_li()
    {
        var li = "";
        var get_ac = $( ".carousel .active" );
        var ac =  $( ".carousel .carousel-inner div" ).index( get_ac );

        for (var i=0; i <= total-1; i++){
            if(i == (ac)/2){
                li += "<li data-target='#mycarousel' data-slide-to='"+i+"' class='active'></li>";         
            }else{
                li += "<li data-target='#mycarousel' data-slide-to='"+i+"' class=''></li>";           
                }
            }
            $(".carousel-indicators").append(li);
        }

    //單則隱藏控制鈕
    if ($('.carousel .carousel-inner div.item').length < 2 ) { 
            $('.carousel-indicators, .carousel-control').hide();
    }

    //縮放視窗調整視窗高度
    $(window).on('resize', function (){
      $wHeight = $(window).height();
      $item.height($wHeight);
    });

    //輪播秒數與滑入停止
    $('.carousel').carousel({
      interval: 5000,
      pause: "hover"
    });
});

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#interior").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

      $("#performance").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          autoHeight : true,
          itemsCustom : [
                [0, 1],
                [450, 2],
                [600, 2],
                [700, 2],
                [1000, 4],
                [1200, 4],
                [1400, 4],
                [1600, 4]
              ],
      });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#colors").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();