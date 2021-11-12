import React from 'react'
import ProductContext from './ProductContext'

export default class AddProduct extends React.Component {

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
        this.context.addProduct(this.state.product_name, this.state.cost)
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add new product</h1>
                <div>
                    <label>Product Name</label>
                    <input type="text" name="product_name"
                        value={this.state.product_name}
                        onChange={this.onUpdateFormField} />
                </div>

                <div>
                    <label>cost</label>
                    <input type="text" name="cost"
                        value={this.state.cost}
                        onChange={this.onUpdateFormField} />
                </div>

                <button onClick={()=>this.onAddProduct()}>Add Product</button>
            </React.Fragment>
        )
    }
}
