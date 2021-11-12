import React, { useContext } from 'react'
import ProductContext from './ProductContext'

export default function Foobar() {
    const context = useContext(ProductContext);
    return <React.Fragment>
        Number of products: {context.getProducts().length}
    </React.Fragment>

}