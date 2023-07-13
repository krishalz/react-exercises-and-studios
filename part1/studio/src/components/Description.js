import React from 'react'
import styles from './Description.module.css';

function RecipeAuthor() {
    let pageTitle="Fantastic Brownie Recipe!";
    let authorLink = "https://sallysbakingaddiction.com/peanut-butter-cup-crunch-brownies-2/#tasty-recipes-77100"; //link to the recipe blog
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally.jpg"; //valid URL pointing to a photo of the author
    let authorName = "found at Sally's Baking Addiction"; //authors full name

   return (
    <div>
     <h3>{pageTitle}</h3>
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Sallys Baking Addiction Brownie crunch recipe" className={styles.imageUpdates} />
        </div>
     <h3>{authorName}</h3>
         <a href={authorLink}>Brownie Crunch Recipe</a> 
    </div>
   );
}

class RecipeDescription extends React.Component {
    render() {
      return (
        <div>
          <h3>Fantastic Brownie Crunch Recipe!</h3>
          <p>This brownie crunch recipe is sooo delish!  &#x1F600;</p>
        </div>
      );
    }
  }

export default RecipeDescription;