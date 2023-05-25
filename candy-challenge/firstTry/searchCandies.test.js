const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
  it('returns an array of candies starting with Ma with a price < 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });
  it('returns an array of candies starting with Ma with a price < 2', () =>{
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  });
  it('returns an array of candies starting with S with a price < 10', () =>{
    expect(searchCandies('S', 10)).toEqual(['Skitties','Skittles', 'Starburst'])
  });
  it('returns an array of candies starting with S with a price < 4', () =>{
    expect(searchCandies('S', 4)).toEqual(['Skitties','Skittles'])
  });
  it('returns an array of candies starting with ma (lowercase) with a price < 10', () =>{
    expect(searchCandies('ma', 10)).toEqual(['Mars','Maltesers'])
  });
})