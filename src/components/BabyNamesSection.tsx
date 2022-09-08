import babyData from "../babyNamesData.json";
import IBaby from "../IBaby";
import sortBabyNamesAlphabet from "../utils/sortBabyNamesAlphabet";
import BabyName from "./BabyName";

function BabyNamesSection(): JSX.Element {

    const babyNames = sortBabyNamesAlphabet(babyData).map((baby: IBaby) => {
        return (
            <p 
            className={baby.sex === "f" ? "female" : "male"} 
            key={baby.id}>
                {baby.name}
                </p>
        //   <BabyName key={baby.id} id={baby.id} name={baby.name} sex={baby.sex}/>
          
        );
      });
    
      return <section className="babyNamesSection">{babyNames}</section>
}

export default BabyNamesSection;