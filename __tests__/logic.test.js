import isValid from '../src/js/Validator';
import getCardType from '../src/js/CardDetector';

describe('Luhn Algorithm Validator', () => {
  test('should return true for valid card numbers', () => {
    expect(isValid('49927398716')).toBe(true);
    expect(isValid('5454545454545454')).toBe(true);
  });
  test('should return false for invalid card numbers', () => {
    expect(isValid('49927398717')).toBe(false); // Корректный невалидный номер
    // ЗАМЕНЕН ОШИБОЧНЫЙ НОМЕР НА ГАРАНТИРОВАННО НЕВАЛИДНЫЙ
    expect(isValid('1234567812345678')).toBe(false);
  });
});

describe('Card Type Detector', () => {
  test('should detect Visa', () => {
    expect(getCardType('4111111111111111')).toBe('visa');
  });
  test('should detect Mastercard', () => {
    expect(getCardType('5105105105105100')).toBe('mastercard');
    expect(getCardType('2221000000000000')).toBe('mastercard');
  });
  test('should detect American Express', () => {
    expect(getCardType('378282246310005')).toBe('amex');
  });
  test('should detect Discover', () => {
    expect(getCardType('6011000000000000')).toBe('discover');
  });
  test('should detect JCB', () => {
    expect(getCardType('3530111333300000')).toBe('jcb');
  });
  test('should detect Diners Club', () => {
    expect(getCardType('30000000000000')).toBe('diners');
  });
  test('should detect Mir', () => {
    expect(getCardType('2200000000000000')).toBe('mir');
  });
  test('should return null for unknown card type', () => {
    expect(getCardType('1111111111111111')).toBe(null);
  });
});