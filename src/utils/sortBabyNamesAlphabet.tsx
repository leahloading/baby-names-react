import IBaby from "../IBaby";

export default function sortBabyNamesAlphabet(babyData:IBaby[] ):IBaby[] {
    return babyData.sort((a,b)=> a.name.localeCompare(b.name))
  }