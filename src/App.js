import React, { Component } from 'react';
import './App.css';
import DogsList from './components/DogsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React: DogsList</h1>
        </header>
        <main>

          <DogsList />

        </main>
      </div>
    );
  }
}

export default App;
