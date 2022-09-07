import babyData from "./babyNamesData.json"

interface IBaby {
    id: number,
    name: string,
    sex: string
  }


function App(): JSX.Element {

  const babyNamesList = babyData.map((baby: IBaby) => { 
  return <li className={baby.sex === "f" ? "female" : "male"} key={baby.id}>{baby.name}</li>
  })
  
  return <ul>{babyNamesList}</ul>
}

export default App;
