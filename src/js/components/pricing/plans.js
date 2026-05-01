export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price=starter]');
  const popularPrice = document.querySelector('[data-price=popular]');
  const enterpricePrice = document.querySelector('[data-price=enterprice]');

  const priceList = {
    starter: {
      default: 120,
      witchSale: 100,
    },
    popular: {
      default: 1680,
      witchSale: 1400,
    },
    enterprice: {
      default: 2520,
      witchSale: 2100,
    },
  };

  const setPricesWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    enterpricePrice.textContent = priceList.enterprice.witchSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterpricePrice.textContent = priceList.enterprice.default;
  };

  switcher.checked = true;
  setPricesWitchSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWitchSale();
    } else {
      setDefaultPrices();
    }
  });
};
