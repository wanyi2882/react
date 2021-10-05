
   
import React from 'react'
import AddNew from './components/AddNew'
import Listing from './components/Listing'
export default class RecipeBook extends React.Component {

    state = {
        // if `active` variable is 'listing', then we show the listing component
        // if `active` variable is 'addnew', then we show the add new component
        'active': 'listing',
        'data': [
            {
                '_id':1,
                'title':'Chicken Rice',
                'ingredients':[
                    'Chicken Broth',
                    'Rice',
                    'Chicken'
                ]
            },
            {
                '_id':2,
                'title':'Duck Rice',
                'ingredients':[
                    'Duck',
                    'Rice',
                    'Soya Sauce'
                ]
            },
            {
                '_id':3,
                'title':'Roti Prata',
                'ingredients':[
                    'Flour',
                    'Egg',
                    'Sugar',
                    'Oil'
                ]
            }
        ],
        'newTitle': '',
        'newIngredients':[]
    }

    render() {
        return <React.Fragment>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active" aria-current="page" onClick={() => {
                            this.setActive('listing')
                        }}>
                            All Recipes
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => {
                            this.setActive('addnew')
                        }}>Add New</button>
                    </li>
                </ul>
                {this.renderContent()}
            </div>

        </React.Fragment>
    }

    renderContent() {
        if (this.state.active == 'listing') {
            return <Listing recipes={this.state.data}/>
        } else if (this.state.active == "addnew") {
            return <AddNew 
                newTitle={this.state.newTitle}
                newIngredients={this.state.newIngredients}
                updateField = {this.updateFormField}
                addNew={this.addNewRecipe}
            />
        }
    }

    setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    addNewRecipe = () => {
        let newRecipe = {
            '_id': Math.floor(Math.random() * 1000 + 9999),
            'title': this.state.newTitle,
            'ingredients': this.state.newIngredients.split(',')
        }

        // 1. clone the original array
        // 2. modify the clone
        // 3. replace the clone in the state
        this.setState({
            'data': [...this.state.data, newRecipe],
            'active':'listing'
        })
    }
}