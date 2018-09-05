var $ = window.$ = window.jQuery;

const wpt__FilterPrice = () => {
    if ($().slider) {
        $(function () {
            $("#slider-range-2").slider({
                range: true,
                min: 300,
                max: 1500,
                values: [300, 1000],
                slide: function (event, ui) {
                    $("#amount").val(ui.values[0] + "000 VNĐ" + " - " + ui.values[1] + "000 VNĐ");
                }
            });
            $("#amount").val($("#slider-range-2").slider("values", 0) + "000 VNĐ" + " - " + $("#slider-range-2").slider("values", 1) + "000 VNĐ");
        });
    }
};

const setScriptFormDateTime = (id) => {
    $("#" + id).datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1,
        // startDate: startDate,
        // initialDate: initialDate
    });
}

const setScriptPartner = () => {
    var _get_class = $('.partner-area');
        if(_get_class.length === 0) return;
        _get_class.each(function() {
            if ( $().owlCarousel ){
                $(this).find('.owl-carousel-partner').owlCarousel({
                    loop:true,
                    autoplay: true,
                    autoplayTimeout:3000,
                    margin:20,
                    smartSpeed:700,
                    autoplayHoverPause:true,
                    dots:false,
                    items:parseInt($(this).find('.owl-carousel-partner').data('columns')),
                    responsive:{
                        0:{
                            items:1,
                        },
                        360:{
                            items:2,
                        },
                        480:{
                            items:2,
                        },
                        576:{
                            items:3,
                        },
                        768:{
                            items: 4,
                        },
                        992:{
                            items: 5,
                        },
                        1200:{
                            items:parseInt($(this).find('.owl-carousel-partner').data('columns')),
                        }
                    }
                });
            };
        });
}

const setScriptProductArea = () => {
    var _get_class = $('.product-area');
        if(_get_class.length === 0)
            return;
        _get_class.each(function() {
            if ( $().owlCarousel ){
                $('.product-slide').owlCarousel({
                    loop:true,
                    autoplay:true,
                    autoplayTimeout:3000,
                    margin:20,
                    smartSpeed:700,
                    autoplayHoverPause:true,
                    dots:true,
                    nav:true,
                    items:parseInt($(this).find('.product-slide').data('columns')),
                    responsive:{
                        0:{
                            items:1,
                            nav: false,
                        },
                        480:{
                            items:1,
                            nav: false,
                        },
                        576:{
                            items:2,
                            nav: false,
                        },
                        768:{
                            items: 2,
                        },
                        992:{
                            items: 3,
                        },
                        1200:{
                            items:parseInt($(this).find('.product-slide').data('columns')),
                        }
                    }
                });
            };
        });
}

export { wpt__FilterPrice, setScriptFormDateTime, setScriptPartner, setScriptProductArea }

