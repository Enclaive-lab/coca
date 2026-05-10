import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInfoSlider = () => {
  const slider = document.querySelector('.info__slider');

  if (!slider) {
    return;
  }

  new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    rewind: true,
    navigation: {
      nextEl: '.info__btn--next',
      prevEl: '.info__btn--prev',
    },
    breakpoints: {
      0: {
        centeredSlides: true,
        spaceBetween: 20,
      },
      769: {
        centeredSlides: false,
        spaceBetween: 32,
      },
    },
  });
};
