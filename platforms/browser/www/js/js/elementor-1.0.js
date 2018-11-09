( function ( $, elementor ) {
    "use strict";

    var Geobin = {

        init: function () {

            var widgets = {
                'xs-maps.default': Geobin.Map,
                'xs-slider.default': Geobin.Slider,
                'xs-partner.default': Geobin.PartnerCarousel,
                'xs-testimonial.default': Geobin.TestimonialCarousel,
                'simple-slider.default': Geobin.SimpleSlider,
                'xs-fun-fact.default': Geobin.FunFact,
                'xs-services.default': Geobin.ServiceCarousel,
                //'xs-testimonial.default' : Geobin.TestimonialBoxCarousel,
            };

            $.each( widgets, function ( widget, callback ) {
                elementor.hooks.addAction( 'frontend/element_ready/' + widget, callback );
            } );

        },

        Map: function ( $scope ) {

            var $container = $scope.find( '.geobin-maps' ),
                map,
                init,
                pins;
            if ( !window.google ) {
                return;
            }

            init = $container.data( 'init' );
            pins = $container.data( 'pins' );
            map = new google.maps.Map( $container[0], init );

            if ( pins ) {
                $.each( pins, function ( index, pin ) {

                    var marker,
                        infowindow,
                        pinData = {
                            position: pin.position,
                            map: map
                        };

                    if ( '' !== pin.image ) {
                        pinData.icon = pin.image;
                    }

                    marker = new google.maps.Marker( pinData );

                    if ( '' !== pin.desc ) {
                        infowindow = new google.maps.InfoWindow( {
                            content: pin.desc
                        } );
                    }

                    marker.addListener( 'click', function () {
                        infowindow.open( map, marker );
                    } );

                    if ( 'visible' === pin.state && '' !== pin.desc ) {
                        infowindow.open( map, marker );
                    }

                } );
            }
        },

        /*Main Slideshow*/
        Slider: function ( $scope ) {
            var carousel = $scope.find( '.tw-hero-slider' );
            if ( !carousel.length ) {
                return;
            }
            carousel.owlCarousel( {
                items: 1,
                loop: true,
                autoplay: true,
                nav: true,
                dots: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                mouseDrag: true,
                smartSpeed: 1100,
                navText: [ '<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">' ],
                responsive: {
                    0: {
                        mouseDrag: false,
                    },
                    600: {
                        mouseDrag: false,
                    },
                    1000: {
                        mouseDrag: true,
                    },
                },
            } );
        },

        /* Client carousel */
        PartnerCarousel: function ( $scope ) {
            var carousel = $scope.find( '.clients-carousel' );
            if ( !carousel.length ) {
                return;
            }
            carousel.owlCarousel( {
                items: 4,
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                responsiveClass: true,
                autoplayHoverPause: true,
                mouseDrag: true,
                smartSpeed: 900,
                responsive: {
                    0: {
                        mouseDrag: false,
                        items: 1,

                    },
                    600: {
                        mouseDrag: false,
                        items: 2,

                    },
                    1000: {
                        mouseDrag: true,
                        items: 4,

                    },
                },

            } );
        },

        /*Testimonial Slider*/
        TestimonialCarousel: function ( $scope ) {
            var carousel = $scope.find( '.tw-testimonial-carousel' );
            var carousel_box = $scope.find( '.testimonial-box-carousel' );
            var gray_carousel = $scope.find( '.testimonial-carousel-gray' );

            if ( carousel.length > 0 ) {
                carousel.owlCarousel( {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    smartSpeed: 900,
                    responsive: {
                        0: {
                            mouseDrag: false,
                        },
                        600: {
                            mouseDrag: false,
                        },
                        1000: {
                            mouseDrag: true,
                        },
                    },
                } );
            }

            /* Testimonial Box Carousel */
            if ( carousel_box.length > 0 ) {
                carousel_box.owlCarousel( {
                    items: 3,
                    margin: 20,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    responsiveClass: true,
                    smartSpeed: 900,
                    responsive: {
                        0: {
                            mouseDrag: false,
                            items: 1,

                        },
                        600: {
                            mouseDrag: false,
                            items: 2,

                        },
                        1000: {
                            mouseDrag: true,
                            items: 3,

                        },
                    },

                } );
            }
            ;


            /* Testimonial Gray carousel */
            if ( gray_carousel.length > 0 ) {
                gray_carousel.owlCarousel( {
                    items: 2,
                    margin: 20,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    smartSpeed: 900,
                    responsive: {
                        0: {
                            mouseDrag: false,
                        },
                        600: {
                            mouseDrag: false,
                        },
                        1000: {
                            mouseDrag: true,
                        },
                    },
                } );
            }
            ;

        },

        /* Our Mission Carousel */
        SimpleSlider: function ( $scope ) {
            var carousel = $scope.find( '.mission-carousel' );
            if ( !carousel.length ) {
                return;
            }

            carousel.owlCarousel( {
                items: 1,
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayHoverPause: true,
                mouseDrag: true,
                smartSpeed: 900,
                animateOut: 'animated slideInRight',
                animateIn: 'animated slideInRight',
                responsive: {
                    0: {
                        mouseDrag: false,
                    },
                    600: {
                        mouseDrag: false,
                    },
                    1000: {
                        mouseDrag: true,
                    },
                },
            } );
        },

        /* Pie Chart */
        FunFact: function ( $scope ) {
            var piecahrt = $scope.find( '.chart' );
            if ( !piecahrt.length ) {
                return;
            }

            piecahrt.easyPieChart( {
                //your configuration goes here
            } );

        },

        /* Service List Box Carousel */
        ServiceCarousel: function ( $scope ) {
            var service_carousel = $scope.find( '.service-list-carousel' );
            if ( !service_carousel.length ) {
                return;
            }
            service_carousel.owlCarousel( {
                items: 3,
                loop: true,
                margin: 10,
                autoplay: true,
                nav: true,
                navText: [ '<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>' ],
                dots: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                mouseDrag: true,
                responsiveClass: true,
                smartSpeed: 900,
                responsive: {
                    0: {
                        mouseDrag: false,
                        items: 1,

                    },
                    600: {
                        mouseDrag: false,
                        items: 2,

                    },
                    1000: {
                        mouseDrag: true,
                        items: 3,
                        margin: 5,

                    },
                },

            } );
        },

        /* Testimonial Box Carousel */

    };

    $( window ).on( 'elementor/frontend/init', Geobin.init );

}( jQuery, window.elementorFrontend ) );