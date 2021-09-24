// import { noAuto } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Product-cart/Cart';
import Products from '../Products/product';
import './shop.css'
// 2*
// 1 <========2, 2========> 3, 2========> 4, 5========>2
const Shop = () => {
    // stp.1> product data lod in ip no.2
    const[products, setProducts]= useState([]);
    //hendl add to cart buttos (price) No.4
    const [cart, setCart]= useState([]);
    // input search tex hendl UI. No.6
    const [displayProduct, setDisplyProduct]= useState([]);

    // stp.1> product data lod in ip no.3
    useEffect( () =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            // input search tex hendl UI. No.7 and END
            setDisplyProduct(data)
        });
    }, [])
    // stp.4 add to data in a localStorage no.1
    useEffect( () =>{
        // product add localStorage
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key)
                // prouduct count 
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;

                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    } ,[products])

    //stp.3> hendl add to cart buttos No.2 <3
    const hendlAddToCart= (product)=>{ 
        const newCart = [...cart, product]
        setCart(newCart);
        // stp.4 use local storage as your db for now no.2 <5
        addToDb(product.key)
    }

    // input search tex hendl. No.2
    const hendlSearch = event => {
        const searchText = event.target.value;
        // input search tex hendl. No.3
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // input search tex hendl. No.4
        setDisplyProduct(matchedProducts);
    }


    return (
        <>
        <div className="InputFild">
            <input 
            // stp.5 input search tex hendl. No.1
            onChange ={hendlSearch}
            className="Search-bar" 
            type="text" 
            placeholder="Search Products" />
        </div>
        <section 
        // stp.1> product data lod in ip no.1
        className="shop-container">
            <div className="rigt">
                
            </div>
            <div className="product-container">
                <h3>Products: {products.length}</h3> 
                <div> 
                    {
                         // input search tex hendl. No.5 (onely map for Searchbar 'useSteat')
                        displayProduct.map(product => <Products
                            // stp.2> map product lod no.1 
                            key={product.key}
                            product={product}
                            // handl add to cart buttos No.3 >3
                            hendlAddToCart={hendlAddToCart}> 
                            </Products>)
                    }
                </div>
            </div>

            {/* hendl add to cart buttos (price) No.6 and end */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </section>
        </>
    );
};

export default Shop;