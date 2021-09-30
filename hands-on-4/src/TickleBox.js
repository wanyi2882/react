import React from "react"

export default class TickleBox extends React.Component{
    state = {
        message: ""
    }

    render(){
        return (<React.Fragment>
            <div style={{border: "1px solid black", 
            margin: "10px",
            width: "50px", 
            height: "50px"}} 
            onMouseEnter={this.tickle} 
            onMouseLeave={this.stopTickle}
            >
                {this.state.message}
            </div>
        </React.Fragment>
        )
    }

tickle = () => {
    console.log("Mouse cursor detected")
    this.setState({
        message: "That tickles"
    })
}

stopTickle = () => {
    console.log("Cursor leaves")
    this.setState({
        message: ""
    })

}

      
}