import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const deliveryCharge = total > 0 ? 10 : 0;
    const grandTotal = total + deliveryCharge; 
    return (
        <div>
            <h3>Order sumary</h3>
            <h4>Items order:{totalQuantity} </h4>
            <br />
            <p>Total: {grandTotal}</p>
            <p>Delivery charge: {deliveryCharge}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;