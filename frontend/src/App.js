import React from "react";
import "./App.css";
import { NavBar } from "./shared";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./view/Home/components/Filter";

function App() {
  return (
    // <div style={{width: '100%', height: '100%', margin: 'auto', display: 'grid', placeItems: 'center'}}>
    //   <div style={{width: '300px'}}>
    //     <Filter />
    //   </div>
    // </div>
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
