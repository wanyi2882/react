import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
      <Counter color="green" startingNumber={13}/>
      <Counter color="red" startingNumber={10}/>

    </div>

  );
}

export default App;
