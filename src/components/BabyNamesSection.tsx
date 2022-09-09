import babyData from "../babyNamesData.json";
import IBaby from "../IBaby";
import sortBabyNamesAlphabet from "../utils/sortBabyNamesAlphabet";
import BabyName from "./BabyName";

interface BabyNamesSectionProps {
  userInput: string;
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

function BabyNamesSection({ userInput }: BabyNamesSectionProps): JSX.Element {
  const sortBabyNames = sortBabyNamesAlphabet(babyData);

  const babyNames = filterBabyNamesBySearch(sortBabyNames, userInput).map(
    (baby: IBaby) => {
      return (
        <p className={baby.sex === "f" ? "female" : "male"} key={baby.id}>
          {baby.name}
        </p>
        //   <BabyName key={baby.id} id={baby.id} name={baby.name} sex={baby.sex}/>
      );
    }
  );

  return <section className="babyNamesSection">{babyNames}</section>;
}

export default BabyNamesSection;
