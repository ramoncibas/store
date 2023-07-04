import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { NavBar } from "./shared";
import Router from "./routes";


function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
