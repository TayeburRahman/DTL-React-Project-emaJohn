import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Product-cart/Cart';
import useProduct from '../Shop/Hooks/Use-product';
import useCart from '../useCart/useCart';
import Reviewitems from './Review-items/Reviewitems';



// order review click page No.1 --->useProduct (2) & useCart(3)
const Order = () => {
    const [product] = useProduct();
    const [cart,  setCart] = useCart(product);

    // Place Oder buttons handle no.3
    const history = useHistory()

    const hendelremoves = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        deleteFromDb(key)
    }
    
    // Place Oder buttons handle no.2
    const handlePlaceOder = () =>{
        history.push('/placeoder');
        // clear added data no and end
        setCart([]);
        clearTheCart()

    }

    return (
        <div className="shop-container">
            <div>

            </div>
            <div className="product-container">
                {
                    // order review click page No.4
                    cart.map(product =>  <Reviewitems 
                        product={product}
                        key={product.key}
                        hendelremoves={hendelremoves} 
                        ></Reviewitems>)
                }

            </div>
            <div  className="cart-container">
                <Cart cart={cart}>
                {/* Place Oder buttons handle no.1 */}
                <button onClick={handlePlaceOder} className="cartButton"> Place Oder </button>
                </Cart>

            </div>
        </div>
    );
};

export default Order;