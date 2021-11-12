import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from './ProductContext';

export default function ProductDetails() {
    let pageParams = useParams();
    console.log(pageParams)
    const { productId } = useParams();
    const [ product, setProduct ] = useState({});
    const context = useContext(ProductContext);

    useEffect(() => {
        const fetchProduct = () => {
            let wantedProduct = context.getProductByID(productId);  
            setProduct(wantedProduct);
        }

       fetchProduct();
    }, [productId])

    return <React.Fragment>
        {product ?
            <React.Fragment>
                <h1>Product Name: {product.product_name}</h1>
                <h2>Cost: {product.cost}</h2>
            </React.Fragment>
            : null}
    </React.Fragment>

}