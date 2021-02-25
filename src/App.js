import Initialize from './Components/Initialize/initialize';
import GamePlay from './Components/GamePlay/GamePlay';
import GameOver from './Components/GameOver/GameOver';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';


function App() {
  return (

    <HashRouter basename='/'>
      <div className="App" >
        <Container className="p-3" fluid="true" >
          <Route exact path="/" component={Initialize}></Route>
          <Route exact path="/GamePlay" component={GamePlay}></Route>
          <Route exact path="/GameOver" component={GameOver}></Route>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
