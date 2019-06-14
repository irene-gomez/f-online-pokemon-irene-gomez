import React from 'react';
import fetchPokemon from '../../services/fetchApiPokemon';
import PokemonList from '../PokemonList';
import FilterInput from '../FilterInput';
import './styles.css';
import Loading from '../Loading';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonsArr: [],
            isLoading: true,
            filterSearch: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetchPokemon().then(data => {
            const pokemonsList = data.results;
            for (const pokemon of pokemonsList) {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(infoPokemon => {
                        this.setState(prevState => {
                            return {
                                pokemonsArr: [
                                    ...prevState.pokemonsArr,
                                    infoPokemon
                                ],
                                isLoading: false
                            };
                        });
                    });
            }
        });
    }

    handleInputChange(e) {
        const { value } = e.currentTarget;
        this.setState({
            filterSearch: value.toLowerCase()
        });
    }

    render() {
        const { filterSearch, pokemonsArr, isLoading } = this.state;
        return (
            <div className="App">
                <form>
                    <FilterInput
                        filterSearch={filterSearch}
                        handleInputChange={this.handleInputChange}
                    />
                </form>
                {isLoading ? (
                    <Loading />
                ) : (
                    <section>
                        <PokemonList
                            pokemonsArr={pokemonsArr
                                .filter(pokemons =>
                                    pokemons.name
                                        .toLowerCase()
                                        .includes(
                                            filterSearch.length >= 3
                                                ? filterSearch
                                                : ''
                                        )
                                )
                                .sort((a, b) => a.id - b.id)}
                        />
                    </section>
                )}
            </div>
        );
    }
}

export default App;
