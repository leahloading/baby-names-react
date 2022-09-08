import React, { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
    userInput: string,
    onType: Dispatch<SetStateAction<string>>
}

function SearchBar({userInput, onType}:SearchBarProps):JSX.Element {

    function handleUserInput(e:React.ChangeEvent<HTMLInputElement>){
        onType(e.target.value)
        // console.log(userInput);
    }
    return <>
    <input type="text" 
    value={userInput}
    onChange={handleUserInput}/> Search 
    </>
}

export default SearchBar;