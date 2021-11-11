import React from 'react'
import axios from 'axios'

export default class Listing extends React.Component {

    url = 'https://8888-copper-tahr-20npvdcv.ws-us18.gitpod.io/'

    state = {
        'data': [

        ]
    }

    fetchDate = async () => {
        let response = await axios.get(this.url +'recipes')
        this.setState({
            data: response.data
        })
    }

    componentDidMount(){
        this.fetchDate()
    }

    render(){
        return <React.Fragment>
            {this.state.data.map( recipe => <div className="card" key={recipe._id}>
                <div className="card-body">
                    <h3 className="card-title">{recipe.title}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        {recipe.ingredients.map ( ingredient => <li>{ingredient}</li>)}
                    </ul>
                </div>

            </div>)}
        </React.Fragment>
    }
}