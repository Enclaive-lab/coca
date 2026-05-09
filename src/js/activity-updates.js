import '/scss/activity-updates.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInfoSlider } from './components/activity-updates/info.js';
import { useArticlesSlider } from './components/activity-updates/articles.js';
import { useFooterAccordion } from './components/footerAccordion.js';

useTheme();
useBurger();
useInfoSlider();
useArticlesSlider();
useFooterAccordion();
