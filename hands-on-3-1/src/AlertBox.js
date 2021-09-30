import React from "react"

export default class AlertBox extends React.Component{
    state = {
        message: "Hello World"
    }

    render(){
        return (<React.Fragment>
            <div style={{border:this.props.border}}>{this.state.message}</div>
        </React.Fragment>
        )
    }
      
}