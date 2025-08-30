import isValid from '../src/js/Validator';
import getCardType from '../src/js/CardDetector';

// Тесты для Validator.js (алгоритм Луна)
describe('isValid', () => {
    // Валидные номера
    test('should return true for a valid Visa card number', () => {
        // Используем корректный номер
        expect(isValid('4242424242424242')).toBe(true);
    });
    test('should return true for a valid Mastercard number', () => {
        // Используем корректный номер
        expect(isValid('5454545454545454')).toBe(true);
    });

    // Невалидные номера
    test('should return false for an invalid card number', () => {
        expect(isValid('4539920894833216')).toBe(false);
    });
    test('should return false for a short number', () => {
        expect(isValid('123')).toBe(false);
    });
    test('should return false for non-digit characters', () => {
        expect(isValid('4539-9208-9483-3215')).toBe(false);
    });
});

// Тесты для CardDetector.js
describe('getCardType', () => {
    test('should return "visa" for numbers starting with 4', () => {
        expect(getCardType('4')).toBe('visa');
    });
    test('should return "mastercard" for numbers starting with 51-55', () => {
        expect(getCardType('51')).toBe('mastercard');
        expect(getCardType('55')).toBe('mastercard');
    });
    test('should return "mastercard" for numbers starting with 22-27', () => {
        expect(getCardType('2221')).toBe('mastercard');
        expect(getCardType('2720')).toBe('mastercard');
    });
    test('should return "amex" for numbers starting with 34 or 37', () => {
        expect(getCardType('34')).toBe('amex');
        expect(getCardType('37')).toBe('amex');
    });
    test('should return "mir" for numbers starting with 2200-2204', () => {
        expect(getCardType('2200')).toBe('mir');
        expect(getCardType('2204')).toBe('mir');
    });
    test('should return null for an unknown card type', () => {
        expect(getCardType('12345')).toBe(null);
    });
});