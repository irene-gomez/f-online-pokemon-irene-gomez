import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FilterInput = props => {
    const { filterSearch, handleInputChange } = props;
    return (
        <input
            type="text"
            name="searchPokemon"
            id="searchPokemon"
            placeholder="Filtra pokemon por nombre"
            value={filterSearch}
            onChange={handleInputChange}
        />
    );
};

FilterInput.propTypes = {
    filterSearch: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
};

export default FilterInput;
