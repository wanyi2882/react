import React from "react"

export default class SurveyForm extends React.Component {
    state = {
        name: "",
        color: "red",
        country: ""
    }

    render (){
        return  (
        <React.Fragment>
            <div>
                <label>Name:</label>
                <input type="text" value={this.state.name} onChange={this.updateName}/>
            </div>

            <div>
                <label>Favourite Color</label>
                <input type="radio" name="color" value="red" onChange={this.updateColor} checked={this.state.color == "red"}/><span>Red</span>
                <input type="radio" name="color" value="yellow" onChange={this.updateColor} checked={this.state.color == "yellow"}/><span>Yellow</span>
                <input type="radio" name="color" value="green" onChange={this.updateColor} checked={this.state.color == "green"} /><span>Green</span>
            </div>

            <div>
                <label>Country</label>
                <select onChange={this.updateCountry} value={this.state.country}>
                <option value="sg">Singapore</option>
                <option value="my">Malaysia</option>
                <option value="id">Indonesia</option>
                </select>
            </div>
        </React.Fragment>
        )
    }

    updateName = (evt) => {
        this.setState({
            name : evt.target.value
    })
    }

    updateColor = (evt) =>{
        this.setState({
            color: evt.target.value
        })
    }

    updateCountry = (evt) => {
        this.setState({
            country: evt.target.value
        })
    }
}