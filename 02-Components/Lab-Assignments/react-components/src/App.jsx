import "./App.css";
import Greetings from "./01-Greetings";
import Welcome from "./02-Welcome";

function App() {
  return (
    <>
      <Greetings name="Pradeep" />
      <Greetings name="Akash" />
      <Welcome/>
    </>
  );
}

export default App;
