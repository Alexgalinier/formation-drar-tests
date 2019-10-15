module.exports = {
  capitalize: (string, onlyFirstLetter) => {
    if (onlyFirstLetter)
      return string.charAt(0).toUpperCase() + string.slice(1);
    return string.toUpperCase();
  },
};
