import React from "react";

const Product = (props) => {
    return (
        <div id="product">
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <p>{props.price}</p>
        </div>
    );
};

export default Product;