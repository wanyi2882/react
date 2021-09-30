import React from 'react'
import LightBulbOn from "./light-on.png"
import LightBulbOff from "./light-off.jpeg"

// will demonstrate using functions for conditional rendering
export default class LightBulb2 extends React.Component {
    state = {
        light: false
    }

    displayLightbulb() {
        let lightBulb = null; // assign nothing
        if (this.state.light == true) {
            lightBulb = <img src={LightBulbOn}/>
        } else {
            lightBulb = <img src={LightBulbOff}/>
        }
        return lightBulb;
    }

    render() {

      

        // using variables to store JSX
        return (
            <React.Fragment>
                <div>
                    {this.displayLightbulb()}
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