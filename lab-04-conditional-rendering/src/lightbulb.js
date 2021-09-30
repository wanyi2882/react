import React from "react"
import LightBulbOn from "./light-on.png"
import LightBulbOff from "./light-off.jpeg"

export default class LightBulb extends React.Component {
    state = {
        light: false
    }

    render(){
        let lightBulb = null; // assign nothing
        if (this.state.light == true) {
            lightBulb = <img src={LightBulbOn}/>
        } else {
            lightBulb = <img src={LightBulbOff}/>
        }
        // using variables to store jsx
        return (<React.Fragment>
            <div>
                {lightBulb}
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