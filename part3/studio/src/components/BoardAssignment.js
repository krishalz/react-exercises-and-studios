import { useState } from 'react';

export default function BoardAssignment () {
   const airFryer = {
      label: "Air Fryer Recipes",
      value: 1
   };
   const chickenRecipes = {
      label: "Chicken Recipes",
      value: 2
   };
   const drummond = {
      label: "The Drummond Farm",
      value: 3
   };

   const [boardName, setName] = useState("no boards yet!");
   const boards = [airFryer, chickenRecipes, drummond];
  
   const handleChange = (event) => {
      const selectedValue = event.target.value;
      const selectedBoard = boards.find((board) => board.value === parseInt(selectedValue));
      setName(selectedBoard ? selectedBoard.label : "no boards yet!");
    }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        <option value="no boards yet!">Select a board</option>
        {boards.map((board) => (
          <option key={board.value} value={board.value}>
            {board.label}
          </option>
        ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}