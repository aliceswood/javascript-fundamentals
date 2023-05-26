class Pokedex {
  constructor() {
    this.pokedex = [];
  }

  fetchPokemon(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())

      .then((data) => {
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
      });
  }

  catch(pokemon) {
    const pokemonToCatch = this.fetchPokemon(pokemon)
      pokemonToCatch.then((pokemon) => {
       return this.pokedex.push(pokemon); 
      });
      return pokemonToCatch
  }

  all() {
    return this.pokedex.map((pokemon) =>{
      return pokemon.name
    });
  }
}
module.exports = Pokedex;
