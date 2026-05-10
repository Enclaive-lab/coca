import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBelieveSlider = () => {
  const slider = document.querySelector('.believe__slider');

  if (!slider) {
    return;
  }

  new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    rewind: true,
    centeredSlides: false,
    navigation: {
      nextEl: '.believe__btn--next',
      prevEl: '.believe__btn--prev',
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

export const useContentSlider = () => {
  const slider = document.querySelector('.content__slider');

  if (!slider) {
    return;
  }

  new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    rewind: true,
    navigation: {
      nextEl: '.content__btn--next',
      prevEl: '.content__btn--prev',
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
