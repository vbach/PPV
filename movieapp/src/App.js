import React, { Component } from 'react';
import TopMovies from './components/TopMovies';
import CurrentMovies from './components/CurrentMovies';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  render() {

    return (

      <div>
        <CurrentMovies />
        <TopMovies />

      </div>
    );
  }
}

export default App;
