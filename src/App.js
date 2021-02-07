import Initialize from './Components/Initialize/initialize';
import GamePlay from './Components/GamePlay/gamePlay';
import GameOver from './Components/GameOver/gameOver';

import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';


function App() {
  return (

    <Router >
      <div className="App" >
        <Container className="p-3">
          <div>
            <div>

              <Route exact path="/" component={Initialize}></Route>
              <Route exact path="/gameplay" component={GamePlay}></Route>
              <Route exact path="/gameover" component={GameOver}></Route>

            </div>
          </div>
        </Container>
      </div>
    </Router >
  );
}

export default App;
