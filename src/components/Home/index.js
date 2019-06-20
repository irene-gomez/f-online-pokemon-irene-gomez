import React, { Fragment } from 'react';
import PokemonList from '../PokemonList';
import FilterInput from '../FilterInput';
import Loading from '../Loading';
import NotFound from '../NotFound';

import './styles.scss';

class Home extends React.Component {
    paintPokemon() {
        const { filterSearch, pokemonsArr, isLoading } = this.props;
        const searchPokemon = pokemonsArr
            .filter(pokemons =>
                pokemons.name
                    .toLowerCase()
                    .includes(filterSearch.length >= 3 ? filterSearch : '')
            )
            .sort((a, b) => a.id - b.id);

        if (isLoading) {
            return <Loading />;
        } else if (searchPokemon.length === 0) {
            return <NotFound />;
        } else {
            return <PokemonList pokemonsArr={searchPokemon} />;
        }
    }
    render() {
        const { filterSearch, handleInputChange } = this.props;

        return (
            <Fragment>
                <form>
                    <FilterInput
                        filterSearch={filterSearch}
                        handleInputChange={handleInputChange}
                    >
                        Filtra pokemon por nombre
                    </FilterInput>
                </form>
                <section className="main-container">
                    {this.paintPokemon()}
                </section>
            </Fragment>
        );
    }
}

export default Home;
