import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReorder } from '@fortawesome/free-solid-svg-icons'
import './Food.css'


const Food = ({ meal, forOrder }) => {

    const { strMealThumb, strMeal, strCategory, strInstructions } = meal;

    return (
        <div className='meal'>
            <img src={strMealThumb} alt=''></img>
            <div className='meal-info'>
                <h4>{strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p>{strInstructions.slice(0, 150)}</p>
            </div>
            <button className='order-btn' onClick={() => forOrder(meal)}>
                <p>Order Now</p>
                <FontAwesomeIcon icon={faReorder} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;