import React from 'react'
import recipedata from "./recipe.json";
import "./styling.css";

function IngredientList() {
  return (
  <div>
    <h3 className="ingredientList">Main Ingredients</h3>
    {recipedata.map((data) => {
      return (
        <div className="ingredientList" key={data.name}>
          {data.ingredients.map((ingredient, index) =>{
            return <li key={index}>{ingredient}</li>;
          })}
      </div>
      );
    })} 
  </div>
  );
}
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array

 