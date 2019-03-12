import React, { Component } from 'react';
import TopMovies from './components/TopMovies';
import CurrentMovies from './components/CurrentMovies';

class App extends Component {

  render() {

    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <CurrentMovies />
          </div>
          <div className="col-4">
            <TopMovies />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
