import React from "react"

//the class that is being extended from is the PARENT
//so in this case, React.Component is the parent , and Counter is the child
//Which means, the Counter will have all the variables and functions of the parent (React.Component)
export default class Counter extends React.Component{
    // state is defined in and used by React.Component
    // two important thing:
    //1. can only be changed and accessed by the counter class itself
    //2. hidden from other components and JS code
    state = {
        "number": 5 //each key value pair in the state object represents one date / piece of information
        // you can also be base on Counter props
        // "number": this.props.startingNumber
    }

    // return the JSX that forms the visuals of the component

    render(){
        return (<React.Fragment>
            <div style={{color:this.props.color}}>Number: {this.state.number}</div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.changeTen}>Change to random number</button>
        </React.Fragment>
        )
    }

    // event-handler
    // for a normal function, this does not always refer to the class
    // therefore we need to use a arrow function for event handlers

    increment = () => {
        this.setState({
            "number": this.state.number + 1
        })
    }

    decrement = () => {
        this.setState({
            "number": this.state.number - 1
        })
    }

    changeTen = () => {
        // cannot change (ie mutate) a state variable directly
        // we must use a setState function instead
        this.setState({
            "number": Math.floor(Math.random()* 100 + 1)
        })
    }
}