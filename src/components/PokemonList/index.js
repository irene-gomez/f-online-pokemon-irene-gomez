import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card';
import './styles.scss';

const PokemonList = props => {
    const { pokemonsArr } = props;
    return (
        <ul className="pokemon-list">
            {pokemonsArr.map(pokemon => {
                return (
                    <li key={`${pokemon.id}`}>
                        <Link to={`/pokemon-detail/${pokemon.id}`}>
                            <Card pokemon={pokemon} />
                        </Link>
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
