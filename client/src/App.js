import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from './utils';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import NavBar from './components/NavBar/NavBar.js';
import CustomizeSelection from './page/CustomizeSelection';
import ExerciseList from './page/ExerciseList';

function App() {

    const [muscles, setGroup] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}muscle`).then((response) => {
            setGroup(response.data.results);
        })
    }, []);

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/customize' exact component={CustomizeSelection} />
        {/* <Route path='/customize/:exerciseId' exact render={(routerProps) => < ExerciseList {...routerProps} group={muscles} />}/> */}
        <Route path='/customize/:exerciseId' component = {ExerciseList}/>
      </Switch>
    </Router>
  );
}

export default App;
