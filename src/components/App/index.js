import React from 'react';
import fetchPokemon from '../../services/fetchApiPokemon';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonsArr: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetchPokemon()
      .then(data => {
        const pokemonsList = data.results;
          for (const pokemon of pokemonsList) {
            fetch(pokemon.url)
              .then(response => response.json())
              .then(infoPokemon => {
                this.setState({
                  pokemonsArr: [...this.state.pokemonsArr, infoPokemon]
                })
              });
            
          }
      })
  }

  render() {
    return (
      <div className="App">
        <p>Holi</p>
      </div>
    );
  }
}

export default App;
