import React from "react";
import classes from "./MealsAvailable.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Aloo Paratha",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas magni officia neque itaque. Nemo culpa quod iure facilis molestias similique",
    price: 30,
  },
  {
    id: "m2",
    name: "Chole Bature",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas magni officia neque itaque. Nemo culpa quod iure facilis molestias similique",
    price: 60,
  },
  {
    id: "m3",
    name: "Chole Samosa",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas magni officia neque itaque. Nemo culpa quod iure facilis molestias similique",
    price: 20,
  },
  {
    id: "m4",
    name: "Aloo Tikki Rice Bowl",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas magni officia neque itaque. Nemo culpa quod iure facilis molestias similique",
    price: 80,
  },
];
const MealsAvailable = () => {
  const MealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};
export default MealsAvailable;
