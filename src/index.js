import './css/style.css';
import App from './js/App';

import './assets/img/visa.png';
import './assets/img/mastercard.png';
import './assets/img/amex.png';
import './assets/img/discover.png';
import './assets/img/jcb.png';
import './assets/img/diners.png';
import './assets/img/mir.png';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
