import '/scss/about.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './components/footerAccordion.js';
import { useBelieveSlider, useContentSlider } from './components/about/swiper.js';

useTheme();
useBurger();
useFooterAccordion();
useBelieveSlider();
useContentSlider();
