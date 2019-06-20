import React from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchPokemon from '../../services/fetchApiPokemon';
import Home from '../Home';

import './styles.scss';

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
                let pokemonData = {};
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(infoPokemon => {
                        pokemonData = infoPokemon;
                        fetch(pokemonData.species.url)
                            .then(response => response.json())
                            .then(dataEvolution => {
                                pokemonData.evolution_from =
                                    dataEvolution.evolves_from_species !== null
                                        ? dataEvolution.evolves_from_species.name
                                        : null;
                                    this.setState(prevState => {
                                        return {
                                            pokemonsArr: [
                                                ...prevState.pokemonsArr,
                                                pokemonData
                                            ],
                                            isLoading: false
                                        };
                                    });
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
        const { filterSearch, isLoading, pokemonsArr } = this.state;
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={() => (
                        <Home 
                            filterSearch={filterSearch} 
                            handleInputChange={this.handleInputChange}
                            isLoading={isLoading}
                            pokemonsArr={pokemonsArr}
                        />
                    )}/>
                </Switch>
            </div>
        );
    }
}

export default App;
