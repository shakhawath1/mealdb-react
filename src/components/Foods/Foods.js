import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';
import './Foods.css'



const Foods = () => {

    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const forOrder = (meal) => {
        // console.log(meal)
        const newMeals = [...order, meal]
        setOrder(newMeals)
    };

    return (
        <div>
            <h2 className='heading'>Wellcome to Our Randhon-Ghor</h2>
            <div className='shop-container'>
                <div className='meal-items'>
                    {
                        meals.map(meal => <Food key={meal.idMeal} meal={meal} forOrder={forOrder}></Food>)
                    }
                </div>
                <div className='ordered-item'>
                    <Order order={order}></Order>
                </div>
            </div>
        </div>
    );
};

export default Foods;

