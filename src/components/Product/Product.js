import React from 'react'
import './product.css'

const Product = (props) => {
    return (
        <div className="product">
            <p>Product Name: {props.title}</p>
            <p onClick={props.click}>Product price: {props.price}</p>
            <p>{props.children}</p>
        </div>

    )
}
export default Product