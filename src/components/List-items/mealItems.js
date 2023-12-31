import React from "react";
import ListItems from "./ListItem";
import classes from './mealItems.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
export default function MealItems(){
    return <>
        <div className={classes.container}>
            <ul>
                {DUMMY_MEALS.map(meal =>  <ListItems key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)}
            </ul>
        </div>
    </>
}