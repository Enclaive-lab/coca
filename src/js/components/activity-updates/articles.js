import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useArticlesSlider = () => {
  const slider = document.querySelector('.articles__slider');
  const articles = document.querySelector('.articles');

  if (!slider || !articles) {
    return;
  }

  new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    watchOverflow: false,
    navigation: {
      prevEl: articles.querySelector('.articles__btn--prev'),
      nextEl: articles.querySelector('.articles__btn--next'),
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      769: {
        spaceBetween: 32,
      },
    },
  });
};
