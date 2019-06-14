import React from 'react';
import fetchPokemon from '../../services/fetchApiPokemon';
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
                        this.setState({
                            pokemonsArr: [
                                ...this.state.pokemonsArr,
                                infoPokemon
                            ]
                        });
                    });
            }
        });
    }

    handleInputChange(e) {
        const { value } = e.currentTarget;
        this.setState({
            filterSearch: value
        });
    }

    render() {
        const { filterSearch, pokemonsArr } = this.state;
        return (
            <div className="App">
                <form>
                    <input
                        type="text"
                        name="searchPokemon"
                        id="searchPokemon"
                        value={filterSearch}
                        onChange={this.handleInputChange}
                    />
                </form>
                <section>
                    <ul>
                        {pokemonsArr.map(pokemon => {
                            return (
                                <li key={`${pokemon.id}`}>
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                    <p>{pokemon.id}</p>
                                    <p>{pokemon.name}</p>
                                    <ul>
                                        {pokemon.types.map(type => <li>{type.type.name}</li>)}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        );
    }
}

export default App;
