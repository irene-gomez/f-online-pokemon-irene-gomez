import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Card = props => {
    const { pokemon } = props;
    return (
        <div className="card">
            <div className="wrapper__image">
                <img
                    className="card__image"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
                <p className="card__id">ID/{pokemon.id}</p>
            </div>
            <div className="wrapper__name">
                <p className="card__name">{pokemon.name}</p>
                {pokemon.evolution_from !== null ? (
                    <p className="card__evolution">
                        Evolves from:{' '}
                        <span className="card__evolution--name">
                            {pokemon.evolution_from}
                        </span>
                    </p>
                ) : (
                    <p className="card__evolution">First pokemon in the line</p>
                )}
                <ul className="card__types">
                    {pokemon.types.map((type, index) => (
                        <li
                            key={index}
                            className={`type-pokemon ${type.type.name}`}
                        >
                            {type.type.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Card.propTypes = {
    pokemon: PropTypes.object.isRequired
};

export default Card;
