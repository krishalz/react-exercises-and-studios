import data from './../data.json';
import {useState} from "react";

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < data.projects.length-1){
            setIndex(index +1);
        } else {
            setIndex(0);
        }
    }

    let projects = data.projects;
    let project = projects[index];

  return (

    <div>
        <button onClick={handleClick}>
            Next
        </button>
            <h2>Coach {project.coach} with song, {project.song}!
        </h2>
            <h2>Takes {project.length}, and is level {project.level}
        </h2>

        
     </div>
  );
}
