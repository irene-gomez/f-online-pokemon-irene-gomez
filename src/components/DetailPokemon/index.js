import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import Error from '../Error';

import './styles.scss';

const evolves = pokemon => {
    const { evolution_from } = pokemon;
    if (evolution_from === null) {
        return 'has not previous evolution';
    } else {
        return <span>evolves from <span className="detail__text--capitalize">{evolution_from}</span></span>;
    }
};

const types = pokemon => {
    if (pokemon) {
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
    }
};

const paintPage = (object, loading) => {
    if (loading) {
        return <Loading />
    } else if (object === undefined){
        return <Error />
    } else {
        return (
            <Fragment>
                <Link to="/" className="link__back">
                    <div className="link__arrow" />
                </Link>
                <article className={`detail ${types(object)}`}>
                    <div className="wrapper__images">
                        <img
                            src={object.sprites.front_default}
                            alt={`Front of ${object.name}`}
                        />
                        <img
                            src={object.sprites.back_default}
                            alt={`Back of ${object.name}`}
                        />
                    </div>
                    <div className="wrapper__info">
                        <h1 className="detail__name">
                            {object.name}
                        </h1>
                        <p className="detail__text">
                            <span className="detail__text--highlight">
                                Height:
                            </span>{' '}
                            {object.height} m
                        </p>
                        <p className="detail__text">
                            <span className="detail__text--highlight">
                                Weight:
                            </span>{' '}
                            {object.weight} kg
                        </p>
                        <p className="detail__text">
                            <span className="detail__text--highlight">
                                Abilities:
                            </span>
                        </p>
                        <ul className="detail__abilities-list">
                            {object.abilities.map((ability, index) => (
                                <li key={index} className="abilities-list__ability">
                                    {ability.ability.name}
                                </li>
                            ))}
                        </ul>
                        <p className="detail__text detail__evolution">
                            <span className="detail__text--capitalize">{object.name}</span>{' '}
                            {evolves(object)}
                        </p>
                    </div>
                </article>
            </Fragment>
        )
    }
};

const DetailPokemon = props => {
    const { characterPokemon, isLoading } = props;

    return (
        <Fragment>
            {paintPage(characterPokemon, isLoading)}
        </Fragment>
    );
};

DetailPokemon.propTypes = {
    characterPokemon: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
};

export default DetailPokemon;
