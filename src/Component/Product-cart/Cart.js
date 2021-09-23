import React from 'react';
import './Cart.css'
// 2 <=======4

const Cart = (props) => {
    const {cart}= props;
    let total =0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div className="cart-left">
            <div className="cart-het">
                <h3>Order Summary:</h3>
                <h5>Items ordered: {cart.length}</h5>
            </div>
            <div className="prousctTotal">
                <h3>Order Total: {total}</h3>
            </div>
        </div>
    );
};

export default Cart;