import '../assets/scss/Main.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider } from './components/home/swiper.js';
import { useTestimonialsSlider } from './components/home/swiper.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
