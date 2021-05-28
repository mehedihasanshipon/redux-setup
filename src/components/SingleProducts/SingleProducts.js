import React from 'react';


const SingleProducts = ({ product }) => {
    console.log(product)

    return (
        <div>
            <h3> {product.title} </h3>
        </div>
    );
};

export default SingleProducts;