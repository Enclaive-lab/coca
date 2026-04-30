export const useFooterAccordion = () => {
  const accordionButtons = document.querySelectorAll('[data-footer-accordion]');

  if (!accordionButtons.length) {
    return;
  }

  const mobileMedia = window.matchMedia('(max-width: 576px)');

  const closeItem = (button) => {
    const item = button.closest('.footer__item');

    item?.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };

  const syncAccordionState = () => {
    accordionButtons.forEach((button) => {
      button.disabled = !mobileMedia.matches;

      if (!mobileMedia.matches) {
        closeItem(button);
      }
    });
  };

  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!mobileMedia.matches) {
        return;
      }

      const item = button.closest('.footer__item');
      const isOpen = item?.classList.toggle('is-open');

      button.setAttribute('aria-expanded', String(Boolean(isOpen)));
    });
  });

  mobileMedia.addEventListener('change', syncAccordionState);
  syncAccordionState();
};
