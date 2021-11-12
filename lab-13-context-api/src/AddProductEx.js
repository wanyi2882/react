import React, {useState, useContext} from 'react'
import ProductContext from './ProductContext'


export default function AddProductEx(){

    const [productName, setProductName] = useState("")
    const [cost, setCost] = useState(0)
    const context = useContext(ProductContext)

        return (
            <React.Fragment>
                <h1>Add new product</h1>
                <div>
                    <label>Product Name</label>
                    <input type="text" name="product_name"
                        value={productName}
                        onChange={(e)=>{setProductName(e.target.value)}} />
                </div>

                <div>
                    <label>cost</label>
                    <input type="text" name="cost"
                        value={cost}
                        onChange={(e)=>{setCost(e.target.value)}} />
                </div>

                <button onClick={()=>context.addProduct(productName, cost)}>Add Product</button>
            </React.Fragment>
        )
    
}