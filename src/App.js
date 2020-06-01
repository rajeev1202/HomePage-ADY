import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/homePage';
import Header from './components/header/headerComponent';

function App() {
  return (
    <Router>
    <div className="app">
      <Header/>
      <Switch>
        <Route path= '/' component={HomePage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
