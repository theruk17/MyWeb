import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FooterPage from "./components/FooterPage";

import Home from "./contents/Home";
import WorkEditor from "./contents/WorkEditor";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/workeditor">
            <WorkEditor />
          </Route>
          <FooterPage />
        </header>
      </div>
    </Router>
  );
}

export default App;
