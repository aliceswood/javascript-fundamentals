
  const fetchPokemon = (pokemonName) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data)=> {
        let pokemonDetails = {
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          types: data.types.map((pokemon) => {
            return pokemon.type.name
          })
        }
        return console.log(pokemonDetails);
      });
  };



module.exports = fetchPokemon;