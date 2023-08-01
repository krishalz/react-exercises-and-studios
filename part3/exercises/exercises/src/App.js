import HobbyIntroduction from "./components/Introduction.js";
import './App.css';
import MyProjects from "./components/Projects.js";

function App() {
  return (
    <div className="App">
      <h1>VR exercise: Supernatural</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
