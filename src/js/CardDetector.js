const cardTypes = [
  { name: 'mir', pattern: /^220/ },

  { name: 'diners', pattern: /^3(?:0[0-5]|[68])/ },
  { name: 'jcb', pattern: /^35/ },
  { name: 'amex', pattern: /^3[47]/ },
  { name: 'visa', pattern: /^4/ },
  { name: 'discover', pattern: /^6(?:011|5)/ },

  { name: 'mastercard', pattern: /^(5|2[2-7])/ },
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
