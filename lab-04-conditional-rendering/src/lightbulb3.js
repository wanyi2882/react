import React from 'react'
import LightBulbOn from "./light-on.png"
import LightBulbOff from "./light-off.jpeg"

// will demonstrate using functions for conditional rendering
export default class LightBulb3 extends React.Component {
    state = {
        light: false
    }
    render() {

        // using variables to store JSX
        return (
            <React.Fragment>
                <div>
                    {this.state.light ? <img src={LightBulbOn} /> : <img src={LightBulbOff} />}
                </div>
                <button onClick={this.switchOn}>On</button>
                <button onClick={this.switchOff}>Off</button>
            </React.Fragment>
        )
    }

    switchOn = () => {
        this.setState({
            'light': true
        })
    }

    switchOff = () => {
        this.setState({
            'light': false
        })
    }
}