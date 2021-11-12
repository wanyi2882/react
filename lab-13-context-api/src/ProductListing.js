// the useContext hook allows a function based
// component to access a context ( a context is
// shared state accesible by different components

import React, { useContext } from 'react'

import ProductContext from './ProductContext'

export default function ProductListing() {
    let context = useContext(ProductContext)
    return (<React.Fragment>
        <ul>
            {context.products().map((p) => {
                return <li key={p.id}>{p.product_name}</li>
            })}
        </ul>
    </React.Fragment>)
}