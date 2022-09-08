import IBaby from "../IBaby";

function BabyName({sex, id, name}:IBaby):JSX.Element {

    return <p className={sex === "f" ? "female" : "male"}>{name}</p>

}

export default BabyName;