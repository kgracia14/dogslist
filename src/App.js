import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { Route } from 'react-router-dom';



class App extends Component {


  render() {
    return (
      <div className="App">
        
        <main>

          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />

        </main>
      </div>
    );
  }
}

export default App;
