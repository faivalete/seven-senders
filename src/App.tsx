import React from 'react';

import { Switch, Route , BrowserRouter as Router} from 'react-router-dom';

import {WidgetsPage, NotFoundPage} from './pages';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Router>
        <div className="content">
            <Switch>
                <Route path="/" component={ WidgetsPage }/>
                <Route component={ NotFoundPage }/>
            </Switch>
        </div>
      </Router>
   
    </div>
  );
}

export default App;
