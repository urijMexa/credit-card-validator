const cardTypes = [
    { name: 'visa', pattern: /^4/ },
    { name: 'mir', pattern: /^220[0-4]/ },
    { name: 'mastercard', pattern: /^(5[1-5]|2[2-7])/ },
    { name: 'amex', pattern: /^3[47]/ },
    { name: 'discover', pattern: /^6(?:011|5)/ },
    { name: 'jcb', pattern: /^35/ },
    { name: 'diners', pattern: /^3(?:0[0-5]|[68])/ },
];

export default function getCardType(cardNumber) {
    for (const type of cardTypes) {
        if (type.pattern.test(cardNumber)) {
            return type.name;
        }
    }
    return null;
}