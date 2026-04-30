import '../assets/scss/Main.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './components/footerAccordion.js';
import { useInsightSlider } from './components/home/swiper.js';
import { useTestimonialsSlider } from './components/home/swiper.js';

useTheme();
useBurger();
useFooterAccordion();
useInsightSlider();
useTestimonialsSlider();
