// WEBP
import {isWebp} from "./function.js";
import Swiper from 'swiper';

isWebp();


const sliderBanners = new Swiper('.banners', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 100,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },
});