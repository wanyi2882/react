import React from "react"

export default class SurveyForm extends React.Component {
    state = {
        name: "",
        color: "red",
        country: "",
        fruits: []
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

            <div>
                <label>Fruits</label>
                <input type="checkbox" name="fruits" value="apple" onChange={this.updateFruits}/><span>apple</span>
                <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruits}/><span>orange</span>
                <input type="checkbox" name="fruits" value="durians" onChange={this.updateFruits}/><span>durians</span>
                <input type="checkbox" name="fruits" value="dragonfruits" onChange={this.updateFruits}/><span>dragonfruits</span>
            </div>
        </React.Fragment>
        )
    }

    updateFruits = (evt) => {
        // if we want to mutate an array that is in the state
        // we cannot modify it directly. so the following won't work
        // this.state.fruits.push(evt.target.value)

        //check if the value is already inside the array
        if (this.state.fruits.includes(evt.target.value)){
            //the value is inside the array

            //1. clone the array
            let clone = this.state.fruits.slice();

            //2. remove the element from the array
            //2a. find the index of the value
            let index = this.state.fruits.indexOf(evt.target.value)
            clone.splice(index,1);

            //3. use setState to update the array in state
            this.setState({
                fruits: clone
            })

        } else {
        // 1. make a copy of the original array
        let clone = this.state.fruits.slice();

        // 2. change the copy (clone) of the array
        clone.push(evt.target.value)

        // 3. use setState to update the array in the state
        this.setState({
            fruits: clone
        })

        }


    }

    //method 2
    updateFruitsv2 = (evt) => {
        if (this.state.fruits.includes(evt.target.value)){
            let clone = this.state.fruits.slice();

            this.state.fruits.filter(function(f){
                return f != evt.target.value
            })

            this.setState({
                fruits: clone
            })


        } else {
            let clone = [ ...this.state.fruits]

            clone.push(evt.target.value)
    
            this.setState({
                fruits: clone
            })
        }

    }
    //method 3
    updateFruitsv3 = (evt) => {
        this.setState({
            fruits: [...this.state.fruits, evt.target.value]
        })
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