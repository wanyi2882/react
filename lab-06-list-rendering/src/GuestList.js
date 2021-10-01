import React from 'react'

export default class GuestList extends React.Component{
    state = {
        guests: ["a", "b", "c", "d", "e"]
    }

    //method 2
    renderGuests(){
        let guestJSX = []
        for (let g of this.state.guests) {
            guestJSX.push(<li><span>{g}</span></li>)
        }
        return guestJSX
    }

    renderGuestsV2() {
        return this.state.guests.map(function(item){
            return <li>{item}</li>
        })
    }

    //method 3

    render(){
        //method 1
        let guestJSX = [];
        for(let g of this.state.guests) {
            guestJSX.push(<li>{g}</li>)
        }
        return(
        <React.Fragment>
            <h1>Method 1</h1>
            <ul>
                {guestJSX}
            </ul>
            <h1>Method 2</h1>
            {this.renderGuests()}
            <h1>Method 3</h1>
            <ul>
                {this.state.guests.map(item => <li>{item}</li>)}
            </ul>
        </React.Fragment>
        )
    }
}