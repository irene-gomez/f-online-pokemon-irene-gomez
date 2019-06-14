import React from 'react';

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

export default FilterInput;
