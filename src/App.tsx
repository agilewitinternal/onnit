import React, { useState } from 'react';
import './App.css';
import { analytics, logEvent } from "../src/utils/firabase";

function App() {
  const [textData, setTextData] = useState("");
  const updateFireBase = () => {
    console.log("TEST====",textData)
    logEvent(analytics, 'notification_received',{'test':`${textData}`});
  }
  const disabled: boolean = textData === ""
 
 
  return (
    <div className="App">
      <header className="App-header">
      <form className="form">
      <label>Enter your name:
        <input type="text" className="textBox" onChange={e => setTextData(e.target.value)}/>
      </label>
      <button onClick={() => updateFireBase()} className = {disabled ? 'disable': ''}>Firebase</button>
    </form>
      </header>
    </div>
  );
}

export default App;
