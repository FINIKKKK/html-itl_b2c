// WEBP
import {isWebp} from "./function.js";

isWebp();


import Swiper from "swiper";
import {Navigation, Pagination, EffectFade, Autoplay} from 'swiper/modules';

const sliderProducts = new Swiper('.products', {
    modules: [Navigation],
    slidesPerView: 6,
    loop: false,
    spaceBetween: 24,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

const sliderBanners = new Swiper('.banners', {
    modules: [Pagination, EffectFade, Autoplay],
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: true,
    },
});

const sliderDay = new Swiper('.day', {
    modules: [Pagination, EffectFade, Autoplay],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 40,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});