import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import NavBar from './components/NavBar/NavBar.js';
import CustomizeSelection from './page/CustomizeSelection';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/customize' exact component={CustomizeSelection} />
      </Switch>
    </Router>
  );
}

export default App;
