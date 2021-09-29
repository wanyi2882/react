import React from "react"

export default class counter extends React.Component {
    //state is predefiend by React.Componement
    //must be named 'state
    state ={
        "number": 0
    }

    // render() is a requirement defined by React
    render(){
        return(<React.Fragment>
            <div class="counter">{this.state.number}</div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>

        </React.Fragment>)
    }

    increment = () =>{
        //update the number key in the state
        this.setState({
            'number': this.state.number +1
        })
    }

    decrement = () =>{
        //update the number key in the state
        this.setState({
            'number': this.state.number -1
        })
    }
}