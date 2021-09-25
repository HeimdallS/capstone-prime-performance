import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from './utils';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import NavBar from './components/NavBar/NavBar.js';
import CustomizeSelection from './page/CustomizeSelection/CustomizeSelection';
import ExerciseList from './page/ExerciseList/ExerciseList';

function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/customize' exact component={CustomizeSelection} />
        <Route path='/customize/:exerciseId' component = {ExerciseList}/>
      </Switch>
    </Router>
  );
}

export default App;
