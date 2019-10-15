const { whoWon } = require('./fight');
jest.mock('./winner.js');
const winner = require('./winner.js');

describe('Fight', () => {
  describe('whoWon', () => {
    it('With two living players, the winner is 1', () => {
      //Arrange
      const player1 = { id: 1, life: 4 };
      const player2 = { id: 2, life: 3 };
      const expectedId = 1;
      const expectedLife = 2;

      // Définir ce que le mock va retourner
      // Quelques infos ici : https://jestjs.io/docs/en/mock-function-api#mockfnmockreturnvaluevalue

      //Act
      const result = whoWon(player1, player2);

      //Assert
      // Vérifier les valeurs de résultats et que le mock a bien été appelé
      // Quelques infos ici : https://jestjs.io/docs/en/mock-functions.html
    });
  });
});
