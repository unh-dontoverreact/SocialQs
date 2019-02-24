import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="*" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
