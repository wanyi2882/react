import React from 'react';
import ProductContext from './ProductContext';

export default class AddProduct extends React.Component {
   
    // allow the AddProduct component to access the ProductContext
    // static means this variable belongs to class
    // and will be the SAME value for all instances of class
    static contextType = ProductContext;
   
    state = {
        product_name: "",
        cost: 0
    }

    onUpdateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddProduct = () => {
        this.context.addProduct(this.state.product_name, this.state.cost);
    }

    render() {
        return (
            <React.Fragment>           
                <div>
                    <label>Name of Product:</label>
                    <input type="text" name="product_name" 
                    value={this.state.product_name} 
                    onChange={this.onUpdateFormField}
                    />
                </div>
                <div>
                    <label>Cost</label>
                    <input type="text" name="cost"
                     value={this.state.cost}
                     onChange={this.onUpdateFormField}/>
                </div>
                <input type="submit" value="Add Product" onClick={this.onAddProduct}/>
            </React.Fragment>
        )
    }
}
