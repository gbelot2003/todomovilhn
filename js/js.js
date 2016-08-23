   
  $(window).load(function(){
       $('#h1').mouseover(function(){
        setTimeout(function(){ $("#h1").trigger('click');}, 700);
      }),
       $('#h2').mouseover(function(){
        setTimeout(function(){ $("#h2").trigger('click');}, 700);
      }),
       $('#h3').mouseover(function(){
        setTimeout(function(){ $("#h3").trigger('click');}, 700);
      }),
       $('#h4').mouseover(function(){
        setTimeout(function(){ $("#h4").trigger('click');}, 700);
      }),
       $('#h5').mouseover(function(){
        setTimeout(function(){ $("#h5").trigger('click');}, 700);
      }),
      $('#h6').mouseover(function(){
        setTimeout(function(){ $("#h6").trigger('click');}, 700);
      }),
      $('#h7').mouseover(function(){
        setTimeout(function(){ $("#h7").trigger('click');}, 700);
      }),
      $('#h8').mouseover(function(){
        setTimeout(function(){ $("#h8").trigger('click');}, 700);
      })
    

      
    $('.main-nav li a').bind('click',function(event){
      var $anchor = $(this);
      
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 102
      }, 1500,'easeInOutExpo');
      /*
      if you don't want to use the easing effects:
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1000);
      */
      event.preventDefault();
    });
            $('.link').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 102
            }, 1500,'easeInOutExpo');
            /*
            if you don't want to use the easing effects:
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000);
            */
            event.preventDefault();
        });
  })
    $(document).ready(function(e) {
        $('#test').scrollToFixed();
        $('.res-nav_click').click(function(){
            $('.main-nav').slideToggle();
            return false       
        });
   
        $(".mfp-close").toggleClass("Blur");
      
        $('#inline-popups').magnificPopup({
          delegate: 'a',
          removalDelay: 500, 
          callbacks: {
            beforeOpen: function() {
              this.st.mainClass = this.st.el.attr('data-effect');
              $("#servicios").toggleClass("Blur");

            },
            close:function(){
          $("#servicios").toggleClass("Blur");
            }
          },
          midClick: true
        });
        
        $('#inline-popup2').magnificPopup({
          delegate: 'a',
          removalDelay: 500, 
          callbacks: {
            beforeOpen: function() {
              this.st.mainClass = this.st.el.attr('data-effect');
              $("#servicios").toggleClass("Blur");
            },
            close:function(){
          $("#servicios").toggleClass("Blur");
            }
          },
          midClick: true
        });
        $('#inline-popup3').magnificPopup({
          delegate: 'a',
          removalDelay: 500, 
          callbacks: {
            beforeOpen: function() {
              this.st.mainClass = this.st.el.attr('data-effect');
              $("#servicios").toggleClass("Blur");
            },
            close:function(){
          $("#servicios").toggleClass("Blur");
            }
            
          },
          midClick: true
        });

    });

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
    document.getElementById('').onclick = function() {
      var section = document.createElement('section');
      section.className = 'wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };



