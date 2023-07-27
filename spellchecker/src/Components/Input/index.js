/*
## Input Component
- Needs to have an input box that takes in text
- The text needs to be saved using handleChange
- The text needs to be saved in a state so it stays alive during rendering
- We need to use the useEffect because the data is being used outside of the app (API)
- There needs to be a button that will submit the input field value
- This value is sent to the app component, then sent to the API */

import React from 'react'
import { useState } from 'react'
import './input.css'

function Input({onSubmit, handleUndo}) {

    const [text, setText] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (text.trim() !== "") {
            console.log('The link was clicked.');
        // This proves the value of text is being passed to the app component
        console.log(text)
        onSubmit(text)
        setText("");
        }
        
      }
      // This proves state updates with each new character typed
      console.log("Input State Updated")
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={function(e) {setText(e.target.value)}}></input>
            {/* Add function here */}
            <button type="submit">Submit</button> 
            <button onClick={() => handleUndo()} className="undo" >Undo</button>
        </form>
    )
}

export default Input