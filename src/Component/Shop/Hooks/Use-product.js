import { useEffect, useState } from "react"


// order review click page No.2
const useProduct =() =>{
    const [product, setProduct] = useState([])

    useEffect (() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then (data => setProduct(data))
    }, []);
    //rutarn necessery things
    return [product];
}

export default useProduct;