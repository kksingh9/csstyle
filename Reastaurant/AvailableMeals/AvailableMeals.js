import { Fragment } from 'react';
import classes from './AvailableMeals.module.css';

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
const AvailableMeals = () => {
    // const mealsList = DUMMY_MEALS.map((meal) => (<li>{meal.name}</li>));
    // const mealsList1 = DUMMY_MEALS.map((meal) => (<li>{meal.name}</li>));
    // const mealsList = DUMMY_MEALS.map((meal) => (<li>{meal.name}</li>));
    return <section className={classes.meals}>
        <ul>
            {DUMMY_MEALS.map( (meal) => (
                <Fragment key={meal.id}>
                <h1>{meal.name}</h1>
                <li>{meal.description}</li>
                <h3>${meal.price}</h3>
                <hr></hr>
                </Fragment>
            ))}
            {/* {mealsList} */}
        </ul>
    </section>
};

export default AvailableMeals;