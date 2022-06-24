import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.nav = { title: "TextUtils" };
  }
  render() {
    return (
      <>
        <Router>
          <Navbar nav={this.nav} />
          <div className="container my-3">
            <Switch>
              <Route path="/home">
                <TextForm heading="Enter the text to analyze below" />
              </Route>
              <Route path="/register">{/* <Register /> */}</Route>

              <Route path="/">{/* <Home /> */}</Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
