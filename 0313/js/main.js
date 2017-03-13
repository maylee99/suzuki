function main() {

(function () {
   'use strict';
   /* ==============================================
   bootstrap carousel
    =============================================== */ 
   $(function(){
    var $item = $('.carousel .item'); 
    var $wHeight = $(window).height();
    $item.height('wHeight'); 
    $item.addClass('W-screen');

    var $item = $('.carousel .carousel-caption');
    $item.addClass('icon-screen ');

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
                li += "<li data-target='#colorcarousel' data-slide-to='"+i+"' class='active'></li>";         
            }else{
                li += "<li data-target='#carousel' data-slide-to='"+i+"' class=''></li>";           
                }
            }
            $(".carousel-indicators").append(li);
        }

//carousel rwd
  $(document).ready(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
  });

  $(window).resize(function() {
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
  });

    //單則隱藏控制鈕
    if ($('.carousel .carousel-inner div.item').length < 2 ) { 
            $('.carousel-indicators, .carousel-control').hide();
    }

    //縮放視窗調整視窗高度
    //$(window).on('resize', function (){
     // $wHeight = $(window).height();
    //  $item.height($wHeight);
   // });

    //輪播秒數與滑入停止
    $('.carousel').carousel({
      interval: 5000,
      pause: "hover"
    });
});

   /* ==============================================
  	Slider
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
    Show Menu
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
  	     loop: true,     
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          center : true,
          autoHeight : false,
          autoWidth:false,   //0311
          itemsCustom : [
                [0, 1],
                [450, 1],
                [600, 1],
                [700, 1],
                [1000, 2],
                [1200, 2],
                [1400, 2],
                [1600, 2]
              ],
  	  });

      // $('#interior').owlCarousel({
      //   margin: 10,
      //   loop: true,
      //   autoWidth: true,
      //   items: 4
      // })
      // 
      

      $("#interior2").owlCarousel({
          loop: true,     
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          center : true,
          autoHeight : false,
          autoWidth:false,   //0311
          itemsCustom : [
                [0, 1],
                [450, 2],
                [600, 3],
                [700, 3],
                [1000, 3],
                [1200, 3],
                [1400, 3],
                [1600, 3]
              ],
      });
      $("#performance").owlCarousel({
          loop: true,     
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          center : true,
          autoHeight : false,
          autoWidth:false,   //0311
          itemsCustom : [
                [0, 1],
                [450, 1],
                [600, 1],
                [700, 1],
                [1000, 2],
                [1200, 2],
                [1400, 2],
                [1600, 2]
              ],
      });

      $("#safety").owlCarousel({
          loop: true,
          //navigation : false,      
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          autoHeight : false,
          center : true,
          autoWidth:false, 
          navigationText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
            ],  
          itemsCustom : [
                [0, 1],
                [450, 1],
                [600, 1],
                [700, 1],
                [1000, 2],
                [1200, 3],
                [1400, 3],
                [1600, 3]
              ],
      });

  	  $("#style").owlCarousel({
  	      loop: true,     
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
          margin: 10,
  	      paginationSpeed : 400,
          autoHeight : false,
          autoWidth:false,   //
          center : true,
  	      itemsCustom : [
				        [0, 1],
                [450, 2],
                [600, 3],
                [700, 3],
                [1000, 3],
                [1200, 4],
                [1400, 4],
                [1600, 4]
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