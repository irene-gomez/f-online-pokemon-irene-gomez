const URL_API = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const fetchPokemon = () => fetch(URL_API).then(response => response.json());

export default fetchPokemon;