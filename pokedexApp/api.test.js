const Pokedex = require("./api");

describe("Pokedex", () => {
  it("returns needed pokemon details with done param", (done) => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon("charizard")
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        done();
      });
  });

  it("returns the promise of pokemon details", () => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon("charizard").then((pokemon) => {
      expect(pokemon.id).toEqual(6);
    });
  });

  it("catches a given pokemon", (done) => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu")
      .then((pokemon) => {
        expect(pokedex.all()).toEqual(["pikachu"]);
        done();
      });
  });

  it("catches multiple pokemon", (done) => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu")
      .then((pokemon) => {
        expect(pokedex.all()).toEqual(["pikachu"]);
        done();
      });
    pokedex.catch("jigglypuff")
      .then((pokemon) => {
        expect(pokedex.all()).toEqual(["pikachu", "jigglypuff"]);
        done();
      });
  });
});