const { getWinner } = require('./winner');

module.exports = {
  whoWon: (player1, player2) => {
    if (player1.life <= 0) return player2;
    if (player2.life <= 0) return player1;

    let winnerFound = null;
    while (winnerFound === null) {
      player1.life = player1.life - 1;
      player2.life = player1.life - 1;
      winnerFound = getWinner(player1, player2);
    }

    return winnerFound;
  },
};
