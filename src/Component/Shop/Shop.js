import React, { useEffect, useState } from 'react';
import Cart from '../Product-cart/Cart';
import Products from '../Products/product';
import './shop.css'
// 1 <========2
// 2========> 3
// 2========> 4

const Shop = () => {
    const[products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);
    useEffect( () =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    const hendlAddToCart= (product)=>{ 
        const newCart = [...cart, product]
        setCart(newCart);

    }
    return (
        <section className="shop-container">
            <div className="rigt">
                
            </div>
            <div className="product-container">
                <h3>Products: {products.length}</h3> 
                <div> 
                    {
                        products.map(product => <Products 
                            key={product.key}
                            product={product}
                            hendlAddToCart={hendlAddToCart}> 
                            </Products>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default Shop;