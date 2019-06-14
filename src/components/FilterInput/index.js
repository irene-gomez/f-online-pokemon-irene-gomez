import React from 'react';
import PropTypes from 'prop-types';

const FilterInput = props => {
    const { filterSearch, handleInputChange } = props;
    return (
        <input
            type="text"
            name="searchPokemon"
            id="searchPokemon"
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
