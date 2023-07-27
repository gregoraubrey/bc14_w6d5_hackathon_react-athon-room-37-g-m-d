
import './App.css';
import Input from '../Input/index.js'
import Output from '../Output/index.js'
import { useState } from 'react'

function App() {

  const [correctedText, setCorrectedText] = useState([])
  async function sendTextToAPI(text) {
    console.log(`this is the argument passed into sendTextToAPI: ${text}`);
    // the URL contains our API key that Max got by signing up for free
    const response = await fetch("http://api.intellexer.com/checkTextSpelling?apikey=225b50db-6a01-49bf-836e-2c98200c4f64&language=ENGLISH&errorTune=2&errorBound=3&minProbabilityTune=2&minProbabilityWeight=30&separateLines=true", {
    method: "POST",
    headers: {
      // "cache-control": "no-cache",
      // "Content-Type": "text/plain"
    },
    body: text,
  }); 
  const data = await response.json();
  // log the data to prove we have received it from the API
  console.log(data);
  // console.log(data.processedSentences[0]);
  setCorrectedText(prevCorrectedText => [...prevCorrectedText, data.processedSentences[0]]);
};
  

  function handleSubmit(text) {
    console.log(`the user submitted: ${text}`);
    sendTextToAPI(text);
  }

  function handleUndo() {
    setCorrectedText(prevCorrectedText => prevCorrectedText.slice(0, -1))
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Spell Checker</h1>
      <Input onSubmit={handleSubmit} handleUndo={handleUndo}/>
      <Output correctedText = {correctedText} />
      </header>
    </div>
  );
}

export default App;
