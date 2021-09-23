import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
// 2 <=========3

const Product = (props) => {
    const {name, stock, star, img, category, key, price}= props.product;

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="Product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="textProduct">
                <h3 className="ProductName">Product: {name}</h3>
                <h5>by: {category}</h5>
                <h4>${price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button 
                onClick={() => props.hendlAddToCart(props.product)}
                className="ProductButton" 
                >{element}add to cart</button>


            </div>
        </div>
    );
};

export default Product;