import React from 'react'
import axios from 'axios' // const axios = require('axios')
export default class FruitList extends React.Component {
    state = {
        'fruits': [] // at the start we have no fruits, so use an empty array
    }

    renderFruits = () => {
        let fruitElements = [];
        for (let fruit of this.state.fruits) {
            fruitElements.push(<li key={fruit.id}>{fruit.name} (${fruit.cost} )</li>)
        }
        return fruitElements;
    }

    async componentDidMount() {
        let  response = await axios.get('fruits.json');
        this.setState({
            'fruits': response.data
        })
    }

    // loadFruits is an event handler (i.e, it got called due to an event happening)
    // so make sure to use arrow functions
    loadFruits = async () => {
        // load the fruits data from fruits.json using axios
        let response = await axios.get('fruits.json') // don't public/ in front of fruits.json
      
        // set the axios response data into the state
       this.setState({
           'fruits': response.data
       })
    }

    render() {
        return(
            <React.Fragment>
                <button onClick={this.loadFruits}>Load Fruits</button>
                <ul>
                    {this.renderFruits()}
                </ul>
           
            </React.Fragment>
        )
        
    }
}