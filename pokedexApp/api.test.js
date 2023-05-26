const Pokedex = require('./api')
const pokedex = new Pokedex()

describe('Pokedex', () => {
  it('returns needed pokemon details with done param', (done) => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon('charizard')
    .then((pokemon) => {
      expect(pokemon.id).toEqual(6);
      done();
    });
  })

  it('returns the promise of pokemon details', () => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon('charizard')
    .then((pokemon) => {
      expect(pokemon.id).toEqual(6);
    });
  });

})