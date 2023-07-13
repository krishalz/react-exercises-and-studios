import React from 'react'
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://sallysbakingaddiction.com/peanut-butter-cup-crunch-brownies-2/#tasty-recipes-77100"; //link to the recipe blog
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally.jpg"; //valid URL pointing to a photo of the author
    let authorName = "Sally's Baking Addiction"; //authors full name

   return (
    <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Sallys Baking Addiction Brownie crunch recipe" className={styles.imageUpdates} />
        <div className = {styles.alignPhotos}>
            <h3>{authorName}</h3>
            <a href={authorLink}>Brownie Crunch Recipe Link</a> 
         </div>
    </div>
   );
}

class RecipeDescription extends React.Component {
    render() {
      return (
        <div>
            <div>
                <h3>Fantastic Brownie Crunch Recipe!</h3>
                <p>This brownie crunch recipe is sooo delish!  &#x1F600;</p>
            </div>      
        <RecipeAuthor />
        </div>
      );
    }
  }

export default RecipeDescription;