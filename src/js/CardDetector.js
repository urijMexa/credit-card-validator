
const cardTypes = [
    { name: 'diners', pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
    { name: 'jcb', pattern: /^35(?:2[89]|[3-8][0-9])[0-9]{12}$/ },
    { name: 'amex', pattern: /^3[47][0-9]{13}$/ },
    { name: 'visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
    { name: 'mir', pattern: /^220[0-4][0-9]{12}$/ },
    { name: 'mastercard', pattern: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/ },
    { name: 'discover', pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
];

export default function getCardType(cardNumber) {
    const cleanCardNumber = cardNumber.replace(/[\s-]/g, '');

    for (const type of cardTypes) {
        if (type.pattern.test(cleanCardNumber)) {
            return type.name;
        }
    }
    return null;
}