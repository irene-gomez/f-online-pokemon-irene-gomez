import React from 'react';
import Card from '../Card';

const PokemonList = props => {
    const { pokemonsArr } = props;
    return (
        <ul>
            {pokemonsArr.map(pokemon => {
                return (
                    <li key={`${pokemon.id}`}>
                        <Card pokemon={pokemon} />
                    </li>
                );
            })}
        </ul>
    );
};

export default PokemonList;
