import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean => 
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h1>{ocean.name}</h1>
      <h2>Fun Facts</h2>
      <h3>
         <ul>{ocean.fact1}</ul>
         <ul>{ocean.fact2}</ul>
         <ul>{ocean.fact3}</ul>
      </h3>
      <Button />
   </div>
);

function Profile()
{
   return(
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;