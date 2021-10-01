import React from 'react'
import axios from 'axios'
export default class SurveyForm extends React.Component {
    state = {
        "name": "",
        "colour": "red",
        "country": "my",
        "fruits": [],
        "all_countries":[],
        "all_fruits":[],
        "all_colours":[]
    }  

    async componentDidMount() {
        let r = await axios.get('colours.json');
        let colours = r.data;

        r = await axios.get('countries.json');
        let countries = r.data;

        r = await axios.get('fruits.json');
        let fruits = r.data;

        this.setState({
            "all_countries" : countries,
            "all_fruits": fruits,
            "all_colours": colours
        })
    }

    renderColours() {
        let colourJSX = [];
        for (let colour of this.state.all_colours) {
            let e = (
                <React.Fragment>
                    <input type="radio" 
                    name="colour"
                    value={colour.value} 
                    onChange={this.updateFormField} 
                    checked={this.state.colour == colour.value} />
                    <span>{colour.display}</span>                
                </React.Fragment>
            )
            colourJSX.push(e);
        }

        return colourJSX;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Favourite Color</label>
                    {this.renderColours()}
                </div>
                <div>
                    <label>Country:</label>
                    <select onChange={this.updateCountry} value={this.state.country} name="country">
                    {
                        this.state.all_countries.map(function(country){
                            return <option value={country.value}>
                                {country.display}
                            </option>
                        })
                    }
                    </select>
                </div>
                <div>
                    <label>Fruits:</label>                    
                    {
                        this.state.all_fruits.map((fruit) => {       
                            return (
                                <React.Fragment>
                                    <input type="checkbox"
                                           name="fruits"
                                           value={fruit.value}
                                           onChange={this.updateFruits} />
                                    <span>{fruit.display}</span>
                                </React.Fragment>

                            )
                        })
                    }
                </div>

                <button disabled={this.getDisabledStatus()}>Ok</button>
            </React.Fragment>

        )
    }

    getDisabledStatus() {
        return !this.state.name || !this.state.colour || !this.state.country || this.state.fruits.length == 0
    }

    updateFruits = (evt) => {
        // if we want to mutuate (i.e modify) an array that is in the state,
        // we cannot modify it directly, so the following won't work:
        // this.state.fruits.push(evt.target.value);

        // CHECK if the value is already inside the array
        if (this.state.fruits.includes(evt.target.value)) {
            // the value is already in the array

            // 1. make a copy of the original array
            let clone = this.state.fruits.slice();

            // 2. remove the element from the array

            // 2a find the index of the value
            let index = this.state.fruits.indexOf(evt.target.value)
            clone.splice(index, 1); // start removing from the first argument (which is the value inside index), and only remove one

            // 3. use setState to update the array in state
            this.setState({
                'fruits': clone
            })

        } else {
            // The value isn't in the array means the checkbox is going from unchecked to checked

            // 1. make a copy of the original array
            let clone = this.state.fruits.slice();

            // 2. change the copy (clone) of the array
            clone.push(evt.target.value);

            // 3. use setState to update the array in the state
            this.setState({
                'fruits': clone
            })
        }


    }

    updateFruitsV2 = (evt) => {
        if (this.state.fruits.includes(evt.target.value)) {
            let cloned = this.state.fruits.filter(function (f) {
                return f != evt.target.value;
            })
            this.setState({
                'fruits': cloned
            })
        } else {
            // 1. make a copy of the original array
            let clone = [...this.state.fruits]

            // 2. change the copy
            clone.push(evt.target.value);

            // 3. update the array in the state
            this.setState({
                'fruits': clone
            })
        }

    }

    updateFruitsV3 = (evt) => {

        if (this.state.fruits.includes(evt.target.value)) {
            // remove the fruit that we just clicked on
            let indexToRemove = this.state.fruits.indexOf(evt.target.value);
            let cloned = [...this.state.fruits.slice(0, indexToRemove), ...this.state.fruits.slice(indexToRemove + 1)];
            this.setState({
                'fruits': cloned
            })

        } else {
            this.setState({
                'fruits': [...this.state.fruits, evt.target.value]
            })
        }

    }

    updateFormField = (evt) => {
        console.log("evt.target.name =>", evt.target.name);
        console.log("evt.target.value =>", evt.target.value);
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateName = (evt) => {
        this.setState({
            'name': evt.target.value
        })
    }

    updateColour = (evt) => {
        this.setState({
            'colour': evt.target.value
        })
    }

    updateCountry = (evt) => {
        this.setState({
            'country': evt.target.value
        });
    }
}