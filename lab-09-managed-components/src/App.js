import React from 'react';
import Form from './Form';
import Welcome from './Welcome';

class App extends React.Component {
  state = {
    username: "",
    email: ""
  }

  updateFormField = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    })
  }

  render(){
      return (
    <div className="App">
      <Form username={this.state.username} 
      email={this.state.email}
      updateFormField={this.updateFormField}/>
      <Welcome username={this.state.username} 
      email={this.state.email}/>
    </div>
  );
  }
}

export default App;
