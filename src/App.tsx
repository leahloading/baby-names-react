import { useState } from "react";
import "./app.css";
import BabyNamesSection from "./components/BabyNamesSection";
import SearchBar from "./components/SearchBar";

function App(): JSX.Element {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <h1>Baby Names</h1>
      <SearchBar userInput={userInput} onType={setUserInput} />

      <BabyNamesSection userInput={userInput} />
    </>
  );
}

export default App;
