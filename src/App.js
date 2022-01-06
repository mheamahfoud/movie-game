import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { BreakpointProvider } from 'react-socks';
import Games from './containers/games/CurrentGames';
import Header from './containers/Header/Header';
import './App.css';
import Contact from './containers/contact/Contact';

function App() {
  return (
    <BreakpointProvider>
      <div className="App">
        <Router>
          <LastLocationProvider>
            <Header />
            <Switch>

              <Route exact path="/contact" component={Contact} />
              <Route exact path="/" component={Games} />

            </Switch>
          </LastLocationProvider>
        </Router>
      </div>
    </BreakpointProvider>
  );
}

export default App;
