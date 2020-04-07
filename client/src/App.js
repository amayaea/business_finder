import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo.png" alt="logo" width={64} height={64} />
          <h1 className="App-title">Business Finder</h1>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
