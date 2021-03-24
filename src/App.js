import Initialize from './Components/Initialize/initialize';
import Login from './Components/Login/login';
import Register from './Components/Register/register';
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
          <Route exact path="/Start" component={Initialize}></Route>
          <Route exact path="/Register" component={Register}></Route>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/GamePlay" component={GamePlay}></Route>
          <Route exact path="/GameOver" component={GameOver}></Route>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
