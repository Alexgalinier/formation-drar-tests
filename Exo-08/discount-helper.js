module.exports = {
  applyDiscount: (price, discount, acceptZeroDiscount) =>
    price * (1 - discount),
};
