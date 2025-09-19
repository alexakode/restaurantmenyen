import { meny } from "./data/menyData.js";
import Menu from "./components/Menu.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Restaurant&shy;meny</h1>
        <Menu retter={meny} />
      </div>
    </>
  );
}

export default App;
