import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './page/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path ='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
