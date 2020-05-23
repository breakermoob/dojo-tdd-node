const calculator = require('../src/calculator');

describe('adds operations', () => {
   test('adds 1 + 2 to equal 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
   });
   test('adds 5 + 5 to equal 10', () => {
      expect(calculator.add(5, 5)).toBe(10);
   });
})



describe('subtracts operations', () => {
   test('subtract 5 - 5 to equal 0', () => {
      expect(calculator.subtract(5, 5)).toBe(0);
   });
   test('subtract 5 - 1 to equal 4', () => {
      expect(calculator.subtract(5, 1)).toBe(4);
   });
   test('subtract 5 - 1 to equal 4', () => {
      expect(calculator.subtract(5, -1)).toBe(6);
   });
})
