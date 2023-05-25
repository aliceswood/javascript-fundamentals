const shoppingBasket = require('./shoppingBasket');

describe('shoppingBasket', () =>{
  const candyDouble = {
    getName: () => {return 'Mars'},
    getPrice: () => {return 4.99}
  };

  it('finds the price of the empty basket', () => {
    const basket = new shoppingBasket(); 
    expect(basket.getTotalPrice()).toBe(0)
  });

  it('adds an item to the basket', () => {
    const basket = new shoppingBasket(); 
    basket.addItem(candyDouble)
    expect(basket.contents).toEqual([candyDouble])
  });

  it('returns the updated basket price when candyDouble has been added', () =>{
    const basket = new shoppingBasket(); 
    basket.addItem(candyDouble)
    expect(basket.getTotalPrice()).toBe(4.99)
  });

  it('adds the total up correctly for multiple items in the basket', () => {
    const basket = new shoppingBasket(); 
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(9.98)
  });

  it('calculates the correct total based on the discount given', () => {
    const basket = new shoppingBasket(); 
    basket.applyDiscount(5)
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(4.98)
  });
})