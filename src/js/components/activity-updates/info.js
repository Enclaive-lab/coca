import Swiper from 'swiper';
import 'swiper/css';

export const useInfoSlider = () => {
  const slider = document.querySelector('.info__slider');

  if (!slider) {
    return;
  }

  new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
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
