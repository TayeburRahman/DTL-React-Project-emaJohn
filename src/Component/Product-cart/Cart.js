import React from 'react';
import './Cart.css'
// 2 <=======4

const Cart = (props) => {
    const {cart}= props;
    console.log(cart);

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
            <div className="cart-het">
                <h3>Order Summary:</h3>
                <h5>Items ordered: {totalQuantity}</h5>
            </div>
            <div className="prousctTotal">
                <p>shipping: {shipping}</p>
                <p>Tex: {tax.toFixed(2)}</p>
                <h3>Grand Total: {GrandTotal.toFixed(2)}</h3>
                <h2>Total: {total.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default Cart;