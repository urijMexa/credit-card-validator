import isValid from './Validator';
import getCardType from './CardDetector';

export default class App {
    constructor() {
        this.form = document.getElementById('card-form');
        this.input = document.getElementById('card-number');
        this.message = document.getElementById('message');
        this.cardLogos = document.querySelectorAll('.card-logo');
    }

    init() {
        this.form.addEventListener('submit', this.onSubmit.bind(this));
        this.input.addEventListener('input', this.onInput.bind(this));
    }

    onSubmit(e) {
        e.preventDefault();
        const cardNumber = this.input.value;

        // Сбрасываем предыдущие стили
        this.input.classList.remove('valid-input', 'invalid-input');
        this.message.style.display = 'none';

        if (isValid(cardNumber)) {
            this.input.classList.add('valid-input');
            this.message.textContent = 'Card number is valid';
            this.message.className = 'message valid';
        } else {
            this.input.classList.add('invalid-input');
            this.message.textContent = 'Card number is invalid';
            this.message.className = 'message invalid';
        }
    }

    onInput() {
        const cardNumber = this.input.value;
        const cardType = getCardType(cardNumber);

        this.cardLogos.forEach(logo => {
            if (cardType && logo.id === cardType) {
                logo.classList.add('active');
            } else {
                logo.classList.remove('active');
            }
        });
    }
}