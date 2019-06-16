import React from 'react';
import fetchPokemon from '../../services/fetchApiPokemon';
import PokemonList from '../PokemonList';
import FilterInput from '../FilterInput';
import Loading from '../Loading';
import NotFound from '../NotFound';
import './styles.css';

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

    paintPokemon() {
        const { filterSearch, pokemonsArr, isLoading } = this.state;
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
            return <NotFound />
        } else {
            return <PokemonList pokemonsArr={searchPokemon} />
        }
    }

    render() {
        const { filterSearch } = this.state;
        return (
            <div className="App">
                <form>
                    <FilterInput
                        filterSearch={filterSearch}
                        handleInputChange={this.handleInputChange}
                    />
                </form>
                <section className="main-container">
                    {this.paintPokemon()}
                </section>
            </div>
        );
    }
}

export default App;
