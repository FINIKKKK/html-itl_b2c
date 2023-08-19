// WEBP
import {isWebp} from "./function.js";

isWebp();

import Swiper from "swiper";
import {Navigation, Pagination, EffectFade, Autoplay} from 'swiper/modules';

// Slider
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

// Slider
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

// Slider
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


// Price Range
const lowerSlider = document.querySelector('#lower');
const upperSlider = document.querySelector('#upper');

document.querySelector('#two').value = upperSlider.value;
document.querySelector('#one').value = lowerSlider.value;

let lowerVal = parseInt(lowerSlider.value);
let upperVal = parseInt(upperSlider.value);

lowerSlider.max = 140900;
upperSlider.max = 140900;
upperSlider.value = upperSlider.max
document.querySelector('#two').value = upperSlider.max

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value = this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value = this.value
};