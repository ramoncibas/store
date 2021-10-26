import React from "react";
import "./App.css";
import { NavBar } from "./components";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
