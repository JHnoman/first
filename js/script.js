$(function () {
    'use strict';

    // Banner part slider code 

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // about video code

    new VenoBox({
        selector: ".video"
    });

});   