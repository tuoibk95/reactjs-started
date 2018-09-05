/*

	1. wpt_Open_social
	2. wpt_MobileMenu
	3. wpt_Carousels
	4. wpt_Carousels_ver1
	5. wpt_Carousels_ver2
	6. wpt_Carousels_ver3
	7. wpt_Carousels_ver4
	8. wpt_Carousels_ver5
	9. wpt_Carousels_ver6
	10. wpt_Carousels_ver7
	11. wpt_GoogleMap
	12. wpt_DateTimePicker
	13. wpt_Tab_Cruises
	14. wpt_Tab_Flight
	15. wpt_Tab_BestPrice
	16. wpt_Tab_CarSearch
	17. wpt_Capcha
	18. wpt_SliderRange
	19. wpt_SliderRange_1
	20. wpt_SliderRange_3
	21. wpt_SliderRange_4
	22. wpt_Add_station
	23. wpt__FilterPrice
	24. wpt__ToggleSidebar
	25. wpt_Search
	26. wpt_OpenDetail
	27. wpt_FlightDetail
	28. wpt__menu_mega
	29. wpt_Preloader

 */


(function($) {
	"use strict";
	var isMobile = function() {
	 	return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
	}

	var wpt_Open_social = function() {
		var _btn = $('.social li.has-dropdown > span.plus');
		_btn.on('click', function(e){
			e.stopPropagation();
			$(this).next('.dropdown-social').toggleClass('active');
		});
		$('.social').on('click', function(e){
			e.stopPropagation();
		});
		$('body').on('click', function(e){
			$('.dropdown-social').removeClass('active');
		});
	};
	
	var wpt_is_small_screen = function(){
		if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
			return true;
		}
		return false;
	}

	var wpt_MobileMenu = function() {
        $(window).on('load resize', function() {
			if ( wpt_is_small_screen() && $('#main-menu').length ) {
				var _wpt_main_menu_mobi = $('#main-menu').attr('id', 'main-menu-mobi').hide();
				$('#header').after(_wpt_main_menu_mobi);
				$('#main-menu-mobi').find('li ul').hide();
				
				$('#main-menu-mobi').find('li:has(ul) >a').each(function(){
				    var _this = $(this);
				    if ( !(_this).next().hasClass('btn-dropdown')){
				        _this.after('<span class="btn-dropdown"></span>');
				    }
				});
				//$('#main-menu-mobi').find('li:has(ul) >a').after('<span class="btn-dropdown"></span>');
				// right Menu
				$('.mega-responsive li.has-dropdown >ul').hide();
				$('.mega-responsive li.has-dropdown >a').each(function(){
				    var _this = $(this);
				    if ( !(_this).next().hasClass('btn-mega')){
				        _this.after('<span class="btn-mega"></span>');
				    }
				});
				//$('.mega-responsive li.has-dropdown >a').after('<span class="btn-mega"></span>');
			} else {
				// revert to PC menu
				var _menu = $('#main-menu-mobi');
				if(_menu.length){
    				_menu.attr('id', 'main-menu').removeAttr('style').find('.dropdown').removeAttr('style');
    				_menu.find('.btn-dropdown').remove();
    				$('#header').find('.navigation').append(_menu);
    
    				// Right Menu
    				var _menu_right = $('.mega-responsive li.has-dropdown >ul');
    				_menu_right.show();
    				_menu_right.find('.btn-mega').remove();
				}

			}
		});

        $('.mobile-menu').on('click', function(e) {         
            $('#main-menu-mobi').toggle(300);
            $(this).toggleClass('clicked')
			 $('.menu-mega i.clicked').	removeClass('clicked');
			 $('.mega-responsive.open').removeClass('open');
			 e.stopPropagation();
        });

        $('.mega-responsive').on('click', '.btn-mega', function(e) {
            $(this).toggleClass('active').next('.mega-dropdown').slideToggle(300);
            e.stopImmediatePropagation();
        });

        $(document).on('click', '#main-menu-mobi .btn-dropdown', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation();
        });
    };

	var wpt_Carousels = function(_class){
		var _get_class = $(_class);
		if(_get_class.length === 0) return;
		_get_class.each(function() {
			if ( $().owlCarousel ){
				$(this).find('.owl-carousel').owlCarousel({
					loop:true,
					autoplay:true,
					autoplayTimeout:3000,
					margin:0,
					smartSpeed:700,
					autoplayHoverPause:true,
					dots:false,
					item: parseInt($(this).find('.owl-carousel').data('columns')),
					responsive:{
						0:{
							items:parseInt($(this).find('.owl-carousel').data('columns')),
						},
					}
				});
			};
		});
	};


    var wpt_GoogleMap = function() {
        if ( $().gmap3 ) {  
            $(".map").gmap3({
                map:{
                    options:{
                        center:[32.301023, -90.193353],
                        zoom: 12,
                        mapTypeId: 'creative',
                        mapTypeControlOptions: {
                            mapTypeIds: ['creative', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false,
                        navigationControl: true,
                        streetViewControl: true
                    }
                },
                getlatlng:{
                    address:  $('.contact-maps').data('address'),
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: $('.contact-maps').data('images')
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "creative",
                    options:{
                        name: "PolygonTheme Map"
                    },
                    styles:[
					    {
					        "featureType": "administrative.country",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "visibility": "simplified"
					            },
					            {
					                "hue": "#ff0000"
					            }
					        ]
					    }
					]
                },  
            });
        }
        $('.map').css( 'height', $('.contact-maps').data('height') );
    };

	var wpt_Tab_Cruises = function() {
        $('.form-submit-area').each(function() {
		    $(this).find('.form-content').children(".inner-box-tab").hide();
		    $(this).find('.form-content').children(".inner-box-tab:first").show();
		    $(this).children("ul.menu-tag-form").children('li').on('click', function(){
		        $('.form-submit-area ul.menu-tag-form li').removeClass("choose");
		        $(this).addClass("choose");
		        $(this).closest('.form-submit-area').children('.form-content').children(".inner-box-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("300");
		    });
	    });
	};

	var wpt_Tab_Flight = function() {
        $('.widget-flight').each(function() {
		    $(this).find('.form-content').children(".inner-box-tab").hide();
		    $(this).find('.form-content').children(".inner-box-tab:first").show();
		    $(this).find("ul.menu-tag-form").children('li').on('click', function(){
		        $('.widget-flight ul.menu-tag-form li').removeClass("choose");
		        $(this).addClass("choose");
		        $(this).closest('.widget-flight').children('.form-content').children(".inner-box-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("300");
		    });
	    });
	};

	var wpt_Tab_BestPrice = function() {
        $('.best-price-container').each(function() {
		    $(this).find('.best-price-content').children(".inner-box-tab").hide();
		    $(this).find('.best-price-content').children(".inner-box-tab:first").show();
		    $(this).find("ul.menu-tab").children('li').on('click', function(){
		        $('.best-price-container ul.menu-tab li').removeClass("choose");
		        $(this).addClass("choose");
		        $(this).closest('.best-price-container').children('.best-price-content').children(".inner-box-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("300");
		    });
	    });
	};

	var wpt_Tab_CarSearch = function() {
        $('.car-list').each(function() {
		    $(this).find('.car-content').children(".inner-box-tab").hide();
		    $(this).find('.car-content').children(".inner-box-tab:first").show();
		    $(this).find("ul.menu-car-search").children('li').on('click', function(){
		        $('.car-list ul.menu-car-search li').removeClass("choose");
		        $(this).addClass("choose");
		        $(this).closest('.car-list').children('.car-content').children(".inner-box-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("300");
		    });
	    });
	};

	var wpt_Capcha = function(){
		$('#submit').on('click', function(){
            var name = $('#name').val();
            var msg = $('#msg').val();
            var captcha = $('#captcha').val();
            
            if( name.length == 0){
                $('#name').addClass('error');
            }
            else{
                $('#name').removeClass('error');
            }

            if( msg.length == 0){
                $('#msg').addClass('error');
            }
            else{
                $('#msg').removeClass('error');
            }

            if( captcha.length == 0){
                $('#captcha').addClass('error');
            }
            else{
                $('#captcha').removeClass('error');
            }
            
            if(name.length != 0 && msg.length != 0 && captcha.length != 0){
                return true;
            }
            return false;
        });

        var capch = '<?php echo $cap; ?>';
        if(capch != 'notEq'){
            if(capch == 'Eq'){
                $('.cap_status').html("Your form is successfully Submitted ").fadeIn('slow').delay(3000).fadeOut('slow');
            }else{
                $('.cap_status').html("Human verification Wrong!").addClass('cap_status_error').fadeIn('slow');
            }
        }
    };

    // var wpt_Add_station = function() {
	// 	$('.add-station').on('click', function(){
	// 		var _form_go = '<div class="input-form mgt11"><input type="text" name="from-go" placeholder="From... "></div>';
	// 		var _to_go = '<div class="input-form mgt11"><input type="text" name="to-go" placeholder="To... "></div>';
	// 		var _date_leaving = '<div class="box-date mgt11"><div class="input-form date form_date" data-date="" data-date-format="dd/mm/yyyy  " data-link-field="dtp_input2" data-link-format="yyyy-mm-dd"><input size="16" type="text" value="" placeholder="29/03/2018" readonly=""><span class="add-on"><i class="icon-remove"></i></span><span class="add-on"><i class="icon-th"></i></span></div></div><div class="box-time select-box input-form mgt11"><div class="controls input-append date  form_time" data-date="" data-date-format="hh:ii p" data-link-field="dtp_input3" data-link-format="hh:ii"><input size="16" type="text" value="" placeholder="10:00 am" readonly><span class="add-on"><i class="icon-remove"></i></span><span class="add-on"><i class="icon-th"></i></span></div></div>'
	// 		$('.input-info-search').children('.info-stations').find('.leaving').append(_form_go);
	// 		$('.input-info-search').children('.info-stations').find('.next-point').append(_to_go);
	// 		$('.input-info-search').children('.info-stations').find('.date-leaving').append(_date_leaving);
	// 	});

	// 	$('.remove-station').on('click', function(){
	// 		$('.input-info-search').children('.info-stations').find('.leaving').find('.input-form.mgt11').last().remove();
	// 		$('.input-info-search').children('.info-stations').find('.next-point').find('.input-form.mgt11').last().remove();
	// 		$('.input-info-search').children('.info-stations').find('.date-leaving').find('.box-date.mgt11').last().remove();
	// 		$('.input-info-search').children('.info-stations').find('.date-leaving').find('.box-time.mgt11').last().remove();
	// 	});	
    // };

    var wpt__menu_mega = function() {
    	var _b_mega = $('.menu-mega i');
    	_b_mega.on('click', function(){
    		$(this).toggleClass('clicked')
    		$('.mega-responsive').toggleClass('open');
			$('#header').find('.mobile-menu.clicked').removeClass('clicked');
			$('#main-menu-mobi').slideUp();
    	})
    }

    var wpt_SliderRange = function() {
    	if( $().slider ) {
	        $("#slider-range").slider({
				range: true,
				min: 0,
				max: 1439,
				values: [540, 1020],
				slide: slideTime
			});
			function slideTime(event, ui){
				var val0 = $("#slider-range").slider("values", 0),
					val1 = $("#slider-range").slider("values", 1),
					minutes0 = parseInt(val0 % 60, 10),
					hours0 = parseInt(val0 / 60 % 24, 10),
					minutes1 = parseInt(val1 % 60, 10),
					hours1 = parseInt(val1 / 60 % 24, 10);
					
				var startTime = getTime(hours0, minutes0);
				var endTime = getTime(hours1, minutes1);
				$("#time").text(startTime + ' - ' + endTime);
			}
			function getTime(hours, minutes) {
				var time = null,
				minutes = minutes + "";
				if (hours < 12) {
					time = "AM";
				}
				else {
					time = "PM";
				}
				if (hours == 0) {
					hours = 12;
				}
				if (hours > 12) {
					hours = hours - 12;
				}
				if (minutes.length == 1) {
					minutes = "0" + minutes;
				}
				return hours + ":" + minutes + " " + time;
			}
			slideTime();
		};
    }; // Filter Price

    var wpt_SliderRange_1 = function(){
    	if( $().slider ) {
	    	$("#slider-range-1").slider({
				range: true,
				min: 0,
				max: 1439,
				values: [540, 1020],
				slide: slideTime
			});
			function slideTime(event, ui){
				var val0 = $("#slider-range-1").slider("values", 0),
					val1 = $("#slider-range-1").slider("values", 1),
					minutes0 = parseInt(val0 % 60, 10),
					hours0 = parseInt(val0 / 60 % 24, 10),
					minutes1 = parseInt(val1 % 60, 10),
					hours1 = parseInt(val1 / 60 % 24, 10);
					
				var startTime = getTime(hours0, minutes0);
				var endTime = getTime(hours1, minutes1);
				$("#time-1").text(startTime + ' - ' + endTime);
			}
			function getTime(hours, minutes) {
				var time = null,
				minutes = minutes + "";
				if (hours < 12) {
					time = "AM";
				}
				else {
					time = "PM";
				}
				if (hours == 0) {
					hours = 12;
				}
				if (hours > 12) {
					hours = hours - 12;
				}
				if (minutes.length == 1) {
					minutes = "0" + minutes;
				}
				return hours + ":" + minutes + " " + time;
			}
			slideTime();
		};
    };

    var wpt__FilterPrice = function() {
        if( $().slider ) {
            $( function() {
                $( "#slider-range-2" ).slider({
                  range: true,
                  min: 300,
                  max: 1500,
                  values: [ 300, 1000 ],
                  slide: function( event, ui ) {
                    $( "#amount" ).val( ui.values[ 0 ] + "000 VNĐ" + " - " + ui.values[ 1 ] + "000 VNĐ" );
                  }
                });
                $( "#amount" ).val( $( "#slider-range-2" ).slider( "values", 0 ) + "000 VNĐ" + " - " + $( "#slider-range-2" ).slider( "values", 1 ) + "000 VNĐ" );
            });
        }
    }; // Filter Price

    var wpt_SliderRange_3 = function(){
    	if( $().slider ) {
	    	$("#slider-range-3").slider({
				range: true,
				min: 0,
				max: 1439,
				values: [540, 1020],
				slide: slideTime
			});
			function slideTime(event, ui){
				var val0 = $("#slider-range-3").slider("values", 0),
					val1 = $("#slider-range-3").slider("values", 1),
					minutes0 = parseInt(val0 % 60, 10),
					hours0 = parseInt(val0 / 60 % 24, 10),
					minutes1 = parseInt(val1 % 60, 10),
					hours1 = parseInt(val1 / 60 % 24, 10);
					
				var startTime = getTime(hours0, minutes0);
				var endTime = getTime(hours1, minutes1);
				$("#time-3").text(startTime + ' - ' + endTime);
			}
			function getTime(hours, minutes) {
				var time = null,
				minutes = minutes + "";
				if (hours == 0) {
					hours = 12;
				}
				if (minutes.length == 1) {
					minutes = "0" + minutes;
				}
				return hours + "h" + minutes + "m ";
			}
			slideTime();
		};
    };

    var wpt_SliderRange_4 = function(){
    	if( $().slider ) {
	    	$("#slider-range-4").slider({
				range: true,
				min: 0,
				max: 1439,
				values: [540, 1020],
				slide: slideTime
			});
			function slideTime(event, ui){
				var val0 = $("#slider-range-4").slider("values", 0),
					val1 = $("#slider-range-4").slider("values", 1),
					minutes0 = parseInt(val0 % 60, 10),
					hours0 = parseInt(val0 / 60 % 24, 10),
					minutes1 = parseInt(val1 % 60, 10),
					hours1 = parseInt(val1 / 60 % 24, 10);
					
				var startTime = getTime(hours0, minutes0);
				var endTime = getTime(hours1, minutes1);
				$("#time-4").text(startTime + ' - ' + endTime);
			}
			function getTime(hours, minutes) {
				var time = null,
				minutes = minutes + "";
				if (hours == 0) {
					hours = 12;
				}
				if (minutes.length == 1) {
					minutes = "0" + minutes;
				}
				return hours + "h" + minutes + "m ";
			}
			slideTime();
		};
    };

    var wpt__ToggleSidebar = function(){
    	$('.sidebar').each(function() {
    		$('span.icon').on('click', function(){
    			$(this).toggleClass('clicked');
    			$(this).closest('.widget-sidebar').children('.widget-content').slideToggle();
    		});
    	});
    };

    var wpt_Search = function() {
    	var _search = $('.header-area .search span');
    	_search.on('click', function(e){
    		e.stopPropagation();
    		$(this).toggleClass('clicked');
    		$(this).parent('.search').children('.form-search').toggleClass('show');
    	});
    	$('.header-area .search .form-search').on('click', function(e){
			e.stopPropagation();
		});
		$('body').on('click', function(e){
			$('.header-area .search .form-search').removeClass('show');
			_search.removeClass('clicked');
		});
    };

    var wpt_OpenDetail = function(){
    	var _btO = $('.price-item span.more');
    	var _btC = $('.close-x');
    	_btO.on('click', function(e){
    		e.stopPropagation();
    		$(this).closest('.layout-theme').children('.trains-detail').addClass('open');
    		$('.layout-theme').addClass('overlay-blue');
    		$("html, body").animate({ scrollTop: 270 }, 1000 , 'easeInOutExpo');
    	});
    	$('.trains-detail').on('click', function(e){
			e.stopPropagation();
		});
    	$('body').on('click', function(e){
			$('.trains-detail').removeClass('open');
			$('.layout-theme').removeClass('overlay-blue');
		});
		_btC.on('click', function(){
			$('.trains-detail').removeClass('open');
			$('.layout-theme').removeClass('overlay-blue');
		});
    };

    var wpt_FlightDetail = function(){
    	var _btF = $('.flight-item .price .more');
    	$('.flight-detail').hide();
    	_btF.on('click', function(){
    		$(this).closest('.flight-item').next('.flight-detail').slideToggle();
    	})
    };

    var wpt_Preloader = function() {        
        $(window).on("load", function () {
              $('#preloader').fadeOut('600', function() {
		      $(this).remove();
		  });
        });
	};
	
	
	/**
	 * DOMready event.
	 */
	$( document ).ready( function() {
		wpt_Open_social();
		wpt_MobileMenu();
		wpt_Carousels('.post-single.big');
		wpt_GoogleMap();
		wpt_Tab_Cruises();
		wpt_Tab_Flight();
		wpt_Tab_BestPrice();
		wpt_Tab_CarSearch();
		wpt_Capcha();
		wpt_SliderRange();
		wpt_SliderRange_1();
		wpt_SliderRange_3();
		wpt_SliderRange_4();
		// wpt_Add_station();
		wpt__FilterPrice();
		wpt__ToggleSidebar();
		wpt_Search();
		wpt_OpenDetail();
		wpt_FlightDetail();
		wpt__menu_mega();
		wpt_Preloader();
	});
})(jQuery);
//Todo: Move to ReactJS