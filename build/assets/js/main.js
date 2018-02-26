'use strict';

$(document).ready(function () {

    //slider
    (function () {
        var $headerSlider = $('.header-slider');

        $headerSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });

        //custom control for slider
        $('.header-slider__right-arrow').on('click', function () {
            $headerSlider.slick('slickNext');
        });
        $('.header-slider__left-arrow').on('click', function () {
            $headerSlider.slick('slickPrev');
        });
    })();

    //fancybox-popup
    $('.js-modal').fancybox({
        closeBtn: true,
        maxWidth: 386,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.65)'
                }
            }
        }
    });

    //only digit keypress
    $('.only-digits').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            console.log('ddd');
            return false;
        }
    });

    //height for title
    $('.production-position__title').setMaxHeights();

    //production spoilar js_collapsed
    (function () {
        var $container = $('.production-position'),
            height = parseInt($container.height()),
            maxHeight = parseInt($('.production-position__item:nth-of-type(9)').position().top) - 15,
            $btn = $('.production-spoilar-btn'),
            btnTitle = $btn.find('span').text();

        $container.addClass('js_collapsed').css({ 'height': maxHeight + 'px' });

        $btn.on('click', function () {
            $container.toggleClass('js_collapsed');

            if ($container.hasClass('js_collapsed')) {

                $container.css({ 'height': maxHeight + 'px' });
                $btn.removeClass('active').find('span').text(btnTitle);
            } else {

                $container.css({ 'height': height + 'px' });
                $btn.addClass('active').find('span').text('Свернуть');
            }
        });
    })();
});

$.fn.setMaxHeights = function () {
    var maxHeight = this.map(function (i, e) {
        return $(e).height();
    }).get();

    return this.height(Math.max.apply(this, maxHeight));
};