import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../Loading';

import './styles.scss';

const evolves = pokemon => {
    const { evolution_from } = pokemon;
    if (evolution_from === null) {
        return 'has no previous evolution';
    } else {
        return <span>evolves from <span className="detail__text--capitalize">{evolution_from}</span></span>;
    }
};

const types = pokemon => {
    if (pokemon.types.length === 1) {
        for (const type of pokemon.types) {
            return type.type.name;
        }
    } else {
        let newType = [];
        for (let i = 0; i < pokemon.types.length; i++) {
            const element = pokemon.types[i].type.name;
            newType.push(element);
        }
        return newType.join('-');
    }
};

const DetailPokemon = props => {
    const { characterPokemon, isLoading } = props;

    return (
        <Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <Fragment>
                    <Link to="/" className="link__back">
                        <div className="link__arrow" />
                    </Link>
                    <article className={`detail ${types(characterPokemon)}`}>
                        <div className="wrapper__images">
                            <img
                                src={characterPokemon.sprites.front_default}
                                alt={`Front of ${characterPokemon.name}`}
                            />
                            <img
                                src={characterPokemon.sprites.back_default}
                                alt={`Back of ${characterPokemon.name}`}
                            />
                        </div>
                        <div className="wrapper__info">
                            <h1 className="detail__name">
                                {characterPokemon.name}
                            </h1>
                            <p className="detail__text">
                                <span className="detail__text--highlight">
                                    Height:
                                </span>{' '}
                                {characterPokemon.height} m
                            </p>
                            <p className="detail__text">
                                <span className="detail__text--highlight">
                                    Weight:
                                </span>{' '}
                                {characterPokemon.weight} kg
                            </p>
                            <p className="detail__text">
                                <span className="detail__text--highlight">
                                    Abilities:
                                </span>
                            </p>
                            <ul className="detail__abilities-list">
                                {characterPokemon.abilities.map((ability, index) => (
                                    <li key={index} className="abilities-list__ability">
                                        {ability.ability.name}
                                    </li>
                                ))}
                            </ul>
                            <p className="detail__text detail__evolution">
                                <span className="detail__text--capitalize">{characterPokemon.name}</span>{' '}
                                {evolves(characterPokemon)}
                            </p>
                        </div>
                    </article>
                </Fragment>
            )}
        </Fragment>
    );
};

DetailPokemon.propTypes = {
    characterPokemon: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default DetailPokemon;
