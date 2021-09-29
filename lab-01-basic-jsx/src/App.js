import cat from './cat.jpg';
import './App.css';
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
        <img src={cat}/>
        <img src={require("./cat.jpg").default}/>
    </React.Fragment>
  );
}

export default App;
