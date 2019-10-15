const { applyDiscount } = require('./discount-helper');

describe('Discount Helper', () => {
  describe('applyDiscount', () => {
    it('Will apply a discount on a price', () => {
      //Arrange
      const price = 20;
      const discount = 0.1;
      const expected = 18;

      //Act
      const result = applyDiscount(price, discount);

      //Assert
      expect(result).toBe(expected);
    });
  });
});
