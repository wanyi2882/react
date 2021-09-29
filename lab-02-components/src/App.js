import './App.css';
import React from 'react';

//Component function must start with Uppercase

function AlertBox(props){
  return (
    <div className="alert" style={{backgroundColor:props.color}}>
      {props.message}
    </div>
  )
}

function App() {
  return (
<React.Fragment>
<AlertBox message="Hello World" color="red"/>
<AlertBox message="Danger" color="yellow"/>
<AlertBox message="Goodbye World" color="pink"/>
</React.Fragment>
  );
}

export default App;
