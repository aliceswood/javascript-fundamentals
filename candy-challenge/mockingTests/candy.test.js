const Candy = require('./candy');


describe('Candy', () => {
  const candy = new Candy('Mars', 4.99);

  it('gets the name of the candy bar', () =>{
    expect(candy.getName()).toEqual('Mars')
  });
  
  it('gets the price of the candy bar', () =>{
    expect(candy.getPrice()).toEqual(4.99)
  });
})

