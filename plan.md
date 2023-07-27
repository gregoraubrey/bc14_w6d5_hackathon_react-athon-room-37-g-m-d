# Plan for hackathon project 20230421

## Testing functionalities of Intellexer API

### Summarizer
- The summaries are not great but the API is very fast and it works

### Multiple URL summarizer
- We could not get this to work

### Comparator
- We tested the CompareURLs feature and it worked well and responded quickly
- It returns a JSON object with the comparison results, including a a key of "proximity" which is a number between 0 and 1 that represents the similarity between the two documents
    - e.g. **google.com** and **google.com** score **1**
    - e.g. **amazon.com** and **amazon.co.uk** score about **0.6**
- We could take the float and convert it to a percentage to display to the user in a `<p>` element

### Spell Checker
- We got it to work using POST requests
- It returns a JSON object with a key of "sourceSentences" and "processedSentences"
- The former contains the user input, and the latter contains the corrected text that the API has returned

## Planning the app

- We decided to use 3 of the APIs
    - Summarizer
    - Comparator
    - Spell Checker

## Planning using Trello
- We made a Trello board with a community template and added the following columns:
    - Project Brief
    - Product Design
    - In-Progress
    - Done

- We made a lo-fi wireframe using Figma
    - The page should have a heading
    - The page should have a text input for the user to enter the text to be spell-checked
    - The page should have a button to submit the text
    - The page should have a textbox for the corrected text to be displayed
    - The page should have a button to save the corrected text to the 'history' list
    - The page should have a list of saved text as an unordered list


## Input Component
- Needs to have an input box that takes in text
- The text needs to be saved using handleChange
- The text needs to be saved in a state so it stays alive during rendering
- We need to use the useEffect because the data is being used outside of the app (API)
- There needs to be a button that will submit the input field value
- This value is sent to the app component, then sent to the API