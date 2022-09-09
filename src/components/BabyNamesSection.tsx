import React, { Dispatch, SetStateAction } from "react";
import babyData from "../babyNamesData.json";
import IBaby from "../IBaby";
import sortBabyNamesAlphabet from "../utils/sortBabyNamesAlphabet";
import BabyName from "./BabyName";

interface BabyNamesSectionProps {
  userInput: string;
  setFavouritesArray: Dispatch<SetStateAction<IBaby[]>>;
  favouritesArray: IBaby[];
}

function filterBabyNamesBySearch(
  babyNames: IBaby[],
  searchterm: string
): IBaby[] {
  let result: IBaby[] = [];

  for (const baby of babyNames) {
    if (baby.name.toLowerCase().includes(searchterm.toLowerCase())) {
      result = [...result, baby];
    }
  }
  return result;
}



function BabyNamesSection({ userInput, setFavouritesArray,favouritesArray }: BabyNamesSectionProps): JSX.Element {

  function handleAddFavourites(babyID: number) {
    let favouriteBaby:IBaby;

    for (const baby of babyData) {
      if (baby.id === babyID) {
        favouriteBaby = baby;
        setFavouritesArray([...favouritesArray, favouriteBaby])
      }
    }
    
  }

  const sortBabyNames = sortBabyNamesAlphabet(babyData);

  const babyNames = filterBabyNamesBySearch(sortBabyNames, userInput).map(
    (baby: IBaby) => {
      return (
        <p className={baby.sex === "f" ? "female" : "male"} 
        key={baby.id}
        onClick={() => handleAddFavourites(baby.id)}>
          {baby.name}
        </p>
        //   <BabyName key={baby.id} id={baby.id} name={baby.name} sex={baby.sex}/>
      );
    }
  );

  return <section className="babyNamesSection">{babyNames}</section>;
}

export default BabyNamesSection;
