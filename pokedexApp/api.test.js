const Pokedex = require("./api");

describe("Pokedex", () => {
  it("returns needed pokemon details with done param", (done) => {
    const pokedex = new Pokedex();
    pokedex.fetchPokemon("charizard").then((pokemon) => {
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

  it("uses async and await to fetch pokemon details", async () => {
    const pokedex = new Pokedex();
    const pokemon = await pokedex.fetchPokemon("charizard");
    expect(pokemon.id).toEqual(6);
  });

  it("catches a given pokemon", (done) => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu").then((pokemon) => {
      expect(pokedex.all()).toEqual(["pikachu"]);
      done();
    });
  });

  it("catches multiple pokemon", (done) => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu").then((pokemon) => {
      expect(pokedex.all()).toEqual(["pikachu"]);
      done();
    });
    pokedex.catch("jigglypuff").then((pokemon) => {
      expect(pokedex.all()).toEqual(["pikachu", "jigglypuff"]);
      done();
    });
  });

  it("catches multiple pokemon using async and await", async () => {
    const pokedex = new Pokedex();
    const pokemon1 = await pokedex.catch("pikachu");
    expect(pokedex.all()).toEqual([pokemon1.name]);

    const pokemon2 = await pokedex.catch("jigglypuff");
    expect(pokedex.all()).toEqual([pokemon1.name, pokemon2.name]);
  });
});
