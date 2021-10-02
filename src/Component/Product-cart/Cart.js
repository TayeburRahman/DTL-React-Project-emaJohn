import { noAuto } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './Cart.css'
// 2 <=======4

//stp.3> hendl add to cart buttos (price) No.5
const Cart = (props) => {
    const {cart}= props;
    console.log(props.children)
    //prouduct Cart price Cart / item count cart
    let totalQuantity =0;
    let total =0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        };
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15: 0;
    const tax = (total + shipping)* 0.10;
    const GrandTotal = total + shipping + tax
    return (
            <div className="cart-left">
                <div className="">
                    <div className="prousctTotal">
                    <h3>Order Summary:</h3>
                    <h5>Items ordered: {totalQuantity}</h5>
                    <p>shipping: {shipping}</p>
                    <p>Tex: {tax.toFixed(2)}</p>
                    <h3>Grand Total: {GrandTotal.toFixed(2)}</h3>
                    <h2>Total: {total.toFixed(2)}</h2>
                    {props.children}
                    </div>
                </div>    
            </div>
    );
};

export default Cart;