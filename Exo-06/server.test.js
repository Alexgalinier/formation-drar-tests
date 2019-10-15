const axios = require('axios');

const SERVER_URL = 'http://localhost:3000';

describe('Admin API', () => {
  describe('Get Posts', () => {
    it('Retrieve all posts after a creation', async () => {
      //Arrange
      const expectedLengthFirstTime = 0;
      const expectedLengthSecondTime = 1;
      const post = { text: 'coucou' };

      //Act
      const resultFirstTime = (await axios.get(`${SERVER_URL}/posts`)).data;
      await axios.post(`${SERVER_URL}/posts`, post);
      const resultSecondTime = (await axios.get(`${SERVER_URL}/posts`)).data;

      //Assert
      expect(resultFirstTime.length).toEqual(expectedLengthFirstTime);
      expect(resultSecondTime.length).toEqual(expectedLengthSecondTime);
    });
  });
});
