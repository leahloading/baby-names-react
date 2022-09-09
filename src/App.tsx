import { useState } from "react";
import "./app.css";
import BabyNamesSection from "./components/BabyNamesSection";
import Favourites from "./components/Favourites";
import SearchBar from "./components/SearchBar";
import IBaby from "./IBaby";

function App(): JSX.Element {
  const [userInput, setUserInput] = useState("");
  const [favouritesArray, setFavouritesArray] = useState<IBaby[]>([]);

  return (
    <>
      <h1>Baby Names</h1>
      <SearchBar userInput={userInput} onType={setUserInput} />
      <Favourites favouritesArray={favouritesArray}/>
      <BabyNamesSection userInput={userInput} setFavouritesArray={setFavouritesArray} favouritesArray={favouritesArray}/>
    </>
  );
}

export default App;
