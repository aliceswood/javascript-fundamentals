class shoppingBasket {

  constructor(contents) {
    this.contents = []
    this.discount = 0
  }

  applyDiscount(discount) {
   this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0
    this.contents.forEach((candy) => {
      totalPrice += candy.getPrice();
    });
    return totalPrice - this.discount;
  }

  addItem(candyToAdd) {
    this.contents.push(candyToAdd)
  }
}

module.exports = shoppingBasket;