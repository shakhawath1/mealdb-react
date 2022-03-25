import React from 'react';
import './Order.css'

const Order = ({ order }) => {

    let names = [];
    const name = order.map(meal =>
        <h6>{meal.strMeal}</h6>
    )
    names.push()

    console.log(names.length)
    if (names.length > 4) {
        alert('No more')
    }
    return (
        <div className='order'>
            <h5>Ordered Items</h5>
            <div>{name}</div>
        </div>
    );
};

export default Order;