import React, { Component } from 'react';
import MovieView from './components/MovieView';
import Main from './components/Main'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  render() {

    return (

      <div>
        <Router>
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/Movie" component={MovieView} />
            </Switch>

          </div>
        </Router>

      </div>

    );
  }
}

export default App;
