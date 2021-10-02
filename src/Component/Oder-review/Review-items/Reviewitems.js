import React from "react";


// order review click page No.5 end
const Reviewitems = (props) => {
  const { name, price, quantity, key } = props.product;
  const { hendelremoves } = props;
  return (
    <div className="Product">
      <div className="textProduct">
        <h4 className="ProductName">{name}</h4>
        <p className>Price {price}</p>
        <p>Quantity {quantity} </p>
        <button className="ProductButton" onClick={() => hendelremoves(key)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Reviewitems;
