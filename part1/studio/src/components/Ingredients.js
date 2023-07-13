import React from 'react'
import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients =["brownie mix", "peanut-butter cups", "peanuts", "chocolate chips", "peanut butter"];
  return (
    <div>
      <h3>Main Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
      </ul>
   </div>
  )
}
