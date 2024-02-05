import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods = (newFoodArray);
  }

  const foodList = foods.map((food) => (
    <li key={food} onClick={() => handleLiClick(food.id)}>
      {food.name} | {food.cuisine} | {food.heatLevel}
    </li>
  ));

  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  return (
    <>
    <button onClick={handleAddFood}>Add New Food</button>
    <ul>{foodList}</ul>
    </>
  );
}

export default SpicyFoodList;
