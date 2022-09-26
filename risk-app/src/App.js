import logo from './logo.svg';
import './App.css';
import {BrowserRouter  as Router, Switch ,  Route } from "react-router-dom";
import Board from './Board';
import PlayerInfo from './PlayerInfo';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Switch>
      <Route path="/home" >
        <Home/>
        </Route>
        <Route path="/" >
            <Board/>
            {/* <PlayerInfo/> */}
          
        </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
