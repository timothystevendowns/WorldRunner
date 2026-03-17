import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import ViewWorld from "./components/view-world.component";
import RunWorld from "./components/run-world.component";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className = "container-fluid">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/view-world" exact component={ViewWorld} />
        <Route path="/run-world" exact component={RunWorld} />
      </div>
    </Router>
  );
}

export default App;
