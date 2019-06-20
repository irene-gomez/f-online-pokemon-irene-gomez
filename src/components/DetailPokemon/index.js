import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../Loading';

import './styles.scss';

const evolves = (pokemon, pokemonEvolution) => {
    const { evolution_from } = pokemon;
    if (evolution_from === null) {
        return 'has no previous evolution';
    } else {
        return (
            <span>
                evolves from {evolution_from}
                <img src={pokemonEvolution.sprites.front_default} alt={pokemonEvolution.name} />
            </span>
        );
    }
};

const DetailPokemon = props => {
    const { characterPokemon, isLoading, prevPokemon } = props;

    return (
        <Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <Link to="/">Back</Link>
                    <div className="detail">
                        <h1>{characterPokemon.name}</h1>
                        <img
                            src={characterPokemon.sprites.front_default}
                            alt={`Front of ${characterPokemon.name}`}
                        />
                        <img
                            src={characterPokemon.sprites.back_default}
                            alt={`Back of ${characterPokemon.name}`}
                        />
                        <p>Height: {characterPokemon.height}</p>
                        <p>Weight: {characterPokemon.weight}</p>
                        <p>Abilities:</p>
                        <ul>
                            {characterPokemon.abilities.map(
                                (ability, index) => (
                                    <li key={index}>{ability.ability.name}</li>
                                )
                            )}
                        </ul>
                        <p>
                            {characterPokemon.name}{' '}
                            {evolves(characterPokemon, prevPokemon)}
                        </p>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

DetailPokemon.propTypes = {
    characterPokemon: PropTypes.object.isRequired,
    prevPokemon: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
};

export default DetailPokemon;
