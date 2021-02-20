import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";


const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE </h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/hats" component={HatsPage}></Route>
      </div>
    );
  }
}

export default App;
