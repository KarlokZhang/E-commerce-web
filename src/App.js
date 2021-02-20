import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";

const HomePage = (props) => (
  <div>
    <button onClick={() => props.history.push("/topics")} >Topics</button>
    <h1>HOME PAGE</h1>
  </div>
);

const TopicsList = (props) => (
  <div>  
    <h1>TOPIC LIST PAGE</h1>
    <Link to={`${props.match.url}/13`} >TO TOPIC 13</Link>
    <Link to={`${props.match.url}/17`} >TO TOPIC 17</Link>
    <Link to={`${props.match.url}/21`} >TO TOPIC 21</Link>
  </div>
);

const TopicDetail = (props) => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicID}</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/topics" component={TopicsList}></Route>
          <Route path="/topics/:topicID" component={TopicDetail}></Route>
      </div>
    );
  }
}

export default App;
