const RecipeAuthor = () => {
   let authorLink = "https://www.thepioneerwoman.com/ree-drummond-life/";
   let authorPhoto = "https://hips.hearstapps.com/hmg-prod/images/scallop-photo-web3-64c02016792be.jpg?crop=1.00xw:1.00xh;0,0&resize=360:*";
   let authorName = "Ree Drummond";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Recipe Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["chicken breasts","eggs","flour","parmesan","marinara sauce","breadcrumbs","spices (basil, black pepper, Italian seasoning, garlic powder)","mozarella cheese"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Air Fryer Chicken Parmesan</h1>
            <p>Super crispy, parmesan-crusted chicken cutlets</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
          <img src="https://hips.hearstapps.com/hmg-prod/images/air-fryer-chicken-parmesan-recipe-1-1653592008.jpg?crop=0.941xw:0.941xh;0.0535xw,0.0587xh&resize=1200:*" alt=""/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}