import React from 'react';
import { Carousel } from './features/carousel/Carousel';
import { Menu } from './features/menu/Menu';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router >
    <div className="App">

              <Route path="/" component={Menu} />
              <Route path="/list" component={Carousel} />


    </div>
      </Router>
  );
}

export default App;
