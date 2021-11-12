import React, {useState} from "react";
import ProductContext from "./ProductContext";

export default function ProductProvider(props) {

    const [products, setProducts] = useState([
        {
          'id': 1,
          'product_name': 'ACME Anvils',
          'cost': 9.99
        },
        {
          'id': 2,
          'product_name': 'ACME Hammer',
          'cost': 15.99
        },
        {
          'id': 3,
          'product_name': 'ACME Screwdrivers',
          'cost': 29.99
        }
      ]);

    const context = {
        getProducts:() => {
            return products;
        },
        addProduct: (newProductName,cost) => {
            let newProduct = {
                'id': Math.floor(Math.random() * 10000 + 9999),
                'product_name': newProductName,
                'cost': cost
            };

            let clone = [...products, newProduct];
            setProducts(clone);
        },
        getProductByID: (wantedProductID) => {
           return products.filter( p => p.id == parseInt(wantedProductID))[0] 
        }
    }

    return <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>
}