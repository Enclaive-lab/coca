import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/dist/css/intlTelInput.css';

export const usePhone = () => {
  const input = document.querySelector('#phone');

  intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/28.0.4/js/utils.js',
  });
};
