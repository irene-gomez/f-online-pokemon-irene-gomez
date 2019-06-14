import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    const { pokemon } = props;
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <ul>
                {pokemon.types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
        </div>
    );
};

Card.propTypes = {
    pokemon: PropTypes.object.isRequired
};

export default Card;
