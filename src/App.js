import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Menu from "./components/pages/Menu";
import Participants from "./components/pages/Participants";
import Navbar from "./components/pages/CustomNavbar";
import Footer from "./components/pages/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Participants" component={Participants} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
