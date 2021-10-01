import React from "react"

export default class SurveyForm extends React.Component {
    state = {
        name: "",
        color: "red",
        country: "",
        fruits: []
    }

    countries = [
        {
            display: "Singapore",
            value: "sg"
        },
        {
            display: "Malaysia",
            value: "my"
        },
        {
            display: "Indonesia",
            value: "id"
        }
    ]

    renderCountries(){
        let countryJSX = []
        for (let country of this.countries){
            let e = (
            <React.Fragment>
                <option value={country.value}>{country.display}</option>
            </React.Fragment>
            )
            countryJSX.push(e)
        }
        return countryJSX 
    }

    colors = [
        {
            display: "red",
            value: "red"
        },
        {
            display: "yellow",
            value: "yellow"
        },
        {
            display: "green",
            value: "green"
        }
    ]

    renderColors(){
        let colorJSX = [];
        for (let color of this.colors){
            let e = (
                <React.Fragment>
                    <input type="radio"
                    name="color"
                    value={color.value}
                    onChange={this.updateColor}
                    checked={this.state.color == color.value}/>
                    <span>{color.display}</span>
                </React.Fragment>
            )
            colorJSX.push(e)
        }
        return colorJSX
    }

    fruits = [
        {
            display: "apple",
            value: "apple"
        },
        {
            display: "orange",
            value: "orange"
        },
        {
            display: "durians",
            value: "durians"
        },
        {
            display: "dragonfruits",
            value: "dragonfruits"
        }
    ]
    render (){
        return  (
        <React.Fragment>
            <div>
                <label>Name:</label>
                <input type="text" value={this.state.name} onChange={this.updateName}/>
            </div>

            <div>
                <label>Favourite Color</label>
                {this.renderColors()}
            </div>

            <div>
                <label>Country</label>
                <select onChange={this.updateCountry} value={this.state.country}>
                    {this.renderCountries()}
                </select>
            </div>

            <div>
                <label>Fruits</label>
                {
                    this.fruits.map((fruit) => {
                        return(
                            <React.Fragment>
                                <input type="checkbox"
                                name="fruits"
                                value={fruit.value}
                                onChange={this.updateFruits}/>
                                <span>{fruit.display}</span>
                            </React.Fragment>
                        )
                    })
                }
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