import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = props => {
    const { pokemon } = props;
    return (
        <div className="card">
            <div className="wrapper__image">
                <img className="card__image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p className="card__id">ID/{pokemon.id}</p>
            </div>
            <div className="wrapper__name">
                <p className="card__name">{pokemon.name}</p>
                <ul className="card__types">
                    {pokemon.types.map((type, index) => (
                        <li key={index}  className="type-pokemon">{type.type.name}</li>
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
