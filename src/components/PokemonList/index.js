import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';
import './styles.css';

const PokemonList = props => {
    const { pokemonsArr } = props;
    return (
        <ul className="pokemon-list">
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

PokemonList.propTypes = {
    pokemonsArr: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default PokemonList;
