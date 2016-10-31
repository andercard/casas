
        $(function(){


        slider2 = $("#slider2").slideReveal({
           width: 300,
          push: false,
          position: "right",
          speed: 600,
          autoEscape: false,
          trigger: $("#trigger")
        });

        $("#abrir").click(function(){

          $("#slider2").slideReveal("show");

        });

        $("#cerrar").click(function(){

          $("#slider2").slideReveal("hide");

        });

        setTimeout(function(){
          slider.slideReveal("show", false);
        }, 1000);

        setTimeout(function(){
          slider.slideReveal("hide", false);
        }, 3000);
        });



    /* resultado*/

  $('.resultado').hide();


    // mostrar
    $("#mostrar-resultado" ).on( "click", function() {
       $('.resultado').fadeIn();
       $('body').fadeIn().addClass('mostrar-busqueda');
    });
    // ocultar
    $("#cerrar" ).on( "click", function() {
       $('.resultado').fadeOut();
       $('body').removeClass('mostrar-busqueda');
    });


  // al bajar el scroll

      $(function() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('body').addClass('scroll--movimiento');
			} else {
				$('body').removeClass('scroll--movimiento');
			}
		});
      });
  
  // desctacados
  
  $(document).ready(function() {
      $("#owl-destacado").owlCarousel({
        autoPlay: 30000000,
          theme : "owl-theme-destacado",
//        pagination: false,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

    });

// scroll footer

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('.footer-fijo').addClass('footer-fijo__final');
   }else {
       $('.footer-fijo').removeClass('footer-fijo__final');
   }
});

$.fn.scrollBottom = function() { 
    return $(document).height() - this.scrollTop() - this.height(); 
};



  // modal enviar email
  
    $("#enviar-mail").animatedModal({
                modalTarget:'modal-02',
                animatedIn:'bounceInDown',
                animatedOut:'bounceOutDown',
                color:'#3498db'
            });
 
        (function() {
            // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
            if (!String.prototype.trim) {
                (function() {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                // in case the input is already filled..
                if( inputEl.value.trim() !== '' ) {
                    classie.add( inputEl.parentNode, 'input--filled' );
                }

                // events:
                inputEl.addEventListener( 'focus', onInputFocus );
                inputEl.addEventListener( 'blur', onInputBlur );
            } );

            function onInputFocus( ev ) {
                classie.add( ev.target.parentNode, 'input--filled' );
            }

            function onInputBlur( ev ) {
                if( ev.target.value.trim() === '' ) {
                    classie.remove( ev.target.parentNode, 'input--filled' );
                }
            }
        })();