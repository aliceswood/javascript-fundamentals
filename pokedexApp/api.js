class Pokedex {
  constructor() {
    this.pokedex = [];
  }

  async fetchPokemon(pokemonName) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    let pokemonDetails = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map((pokemon) => {
        return pokemon.type.name;
      }),
    };
    return pokemonDetails;
  }

  async catch(pokemon) {
    const pokemonToCatch = await this.fetchPokemon(pokemon);
    this.pokedex.push(pokemonToCatch);
    return pokemonToCatch;
  }

  all() {
    return this.pokedex.map((pokemon) => {
      return pokemon.name;
    });
  }
}
module.exports = Pokedex;
