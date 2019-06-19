import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FilterInput = props => {
    const { filterSearch, handleInputChange } = props;
    return (
        <Fragment>
            <label htmlFor="searchPokemon" className="hidden">
                {props.children}
            </label>
            <input
                type="text"
                name="searchPokemon"
                id="searchPokemon"
                placeholder={props.children}
                value={filterSearch}
                onChange={handleInputChange}
            />
        </Fragment>
    );
};

FilterInput.propTypes = {
    filterSearch: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
};

export default FilterInput;
