import image from './image.png';
import image2 from './cat.jpg'
import './App.css';
import React from 'react';
import SumOfTwo from "./SumOfTwo"

//Component function must start with Uppercase

function BorderedImageFrame(props){
  return (
    <div style={{border:props.border}}>
      <img src={props.image}/>
    </div>
  )
}



function App() {
  return (
<React.Fragment>
  <BorderedImageFrame image={image2} border="4px solid red"/>
  <SumOfTwo number1={2} number2={3}/>
</React.Fragment>)
}

export default App;
