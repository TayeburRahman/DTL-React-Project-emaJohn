import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
// 2 <=========3

// stp.2> map product lod no.2
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
                <div className="product-ditels">
                    <div>
                        <h5>by: {category}</h5>
                        <h4>${price}</h4>
                    </div>
                <div> 
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star">
                    </Rating>
                </div>
                    
                </div>
                <p>only {stock} left in stock - order soon</p> 
                <button 
                //stp.3> haldl add to cart buttos No.1
                onClick={() => props.hendlAddToCart(props.product)}
                className="ProductButton" 
                >{element}add to cart</button>

            </div>
        </div>
    );
};

export default Product;