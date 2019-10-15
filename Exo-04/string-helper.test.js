const { capitalize } = require('./string-helper');

describe('String Helper', () => {
  describe('Capitalize', () => {
    it('All letters will be capitalized', () => {
      //Arrange
      const string = 'abc';

      //Act
      const result = capitalize(string);

      //Assert
      expect(result).toEqual('ABC');
    });

    // Compléter le test pour que le code coverage soit de 100%
  });
});
