import './App.css';

import ProductContext from "./ProductContext.js"
import ProductListing from "./ProductListing"
import React from 'react';
import AddProduct from './AddProduct';
import AddProductEx from './AddProductEx';

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        product_name: "ACME Anvils",
        cost: 9.99
      },
      {
        id: 2,
        product_name: "ACME Hammers",
        cost: 19.99
      },
      {
        id: 3,
        product_name: "ACME Screwdrivers",
        cost: 29.99
      }
    ]
  }

  render() {
    const context = {
      // make sure the products function is an array
      // the purpose of the function is to retrieve
      products: () => {
        return this.state.products;
      },

      addProduct: (productName, cost) => {
        // 1. clone array
        // 2. modify array
        // 3. set clone to state
        let id = Math.floor(Math.random() * 100000 + 99999)
        this.setState({
          'products': [...this.state.products,{
            "id": id,
            "product_name": productName,
            "cost": cost
          }]
        })
      }
    }


    return <ProductContext.Provider value={context}>
      <React.Fragment>
        <h1>Hello World</h1>
        <ProductListing />
        <AddProductEx />
      </React.Fragment>
    </ProductContext.Provider>
  }



}

export default App;
