export default function BookList() {
   let pageTitle = "My List of Books to Read";
   let book1 = "https://images-na.ssl-images-amazon.com/images/I/417Dw75YqmL._AC_SX368_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/5101BKStCsL.jpg";
   let book3 = "https://m.media-amazon.com/images/I/41y5hXl9EjL.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <li><img src={book1} alt="The Magic of Sea Glass by Jenny Hale" /></li>
         <li><img src={book2} alt="Doomsday Match (The Dresden Codex Book 1)" /></li>
         <li><img src={book3} alt="Girl With A Rose by Leslie Wolfe" /></li>
      </div>      
   );
}