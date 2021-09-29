import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from './utils';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar.js';
import CustomizeSelection from './page/CustomizeSelection/CustomizeSelection';
import ExerciseList from './page/ExerciseList/ExerciseList';
import Shuffle from './page/Shuffle/Shuffle';
import Execution from './page/Execution/Execution';
import Saved from './page/SavedPage/Saved';
import SavedWorkout from './components/SavedWorkout/SavedWorkout';

function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/customize' exact component={CustomizeSelection} />
        <Route path='/customize/:exerciseId' component = {ExerciseList} />
        <Route path='/shuffle' component = {Shuffle} />
        <Route path='/execute' component = {Execution} />
        <Route path='/saved' exact component = {Saved} />
        <Route path='/saved/:savedId' component = {SavedWorkout} />
      </Switch>
    </Router>
  );
}

export default App;
