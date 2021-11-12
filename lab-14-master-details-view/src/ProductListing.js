// the useContext hook allows a function-based
// component to access a context (a context is
// shared state accessible by different components)
import React, {useContext} from 'react';
import Foobar from './Foobar';

import ProductContext from './ProductContext';
import { Link } from 'react-router-dom';

export default function ProductListing() {
    let context = useContext(ProductContext);
    return (
        <React.Fragment>
            <ul>
            {
                context.getProducts().map( (p)=>{
                    return <li key={p.id}>
                        {p.product_name}
                        | <Link to={"/product/" + p.id}>More...</Link>
                    </li>
                })
            }
            </ul>
            <Foobar/>

        </React.Fragment>

    )
}