import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price} = props.product;
    return (
        <div className='flex'>
            <img src={img} alt=""></img>
            <h4>{name}</h4>
            <p>price: {price}</p>
            <button onClick={() => props.handleAddToCart(props.product)} className="btn">add to order</button>
        </div>
    );
};

export default Product;