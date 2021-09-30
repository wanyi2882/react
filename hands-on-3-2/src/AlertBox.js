import React from "react"

export default class AlertBox extends React.Component{
    state = {
        message: this.props.message
    }

    render(){
        return (<React.Fragment>
            <div style={{border:this.props.border}}>{this.state.message}</div>
        </React.Fragment>
        )
    }
      
}