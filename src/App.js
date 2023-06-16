import React, { useState } from "react";
import DrumPad from "./components/drumPad.jsx";
import DisplaySound from "./components/displaySound.jsx";
import "./styles/drumMachine.css"

function App() {

  const [currentSound, setCurrentSound] = useState('Let\'s start!');
  const [workState, setWorkState] = useState(true);
  
  return <div className="drum-machine">
    <DrumPad setCurrentSound={setCurrentSound} workState={workState} />
    <DisplaySound currentSound={currentSound} setCurrentSound={setCurrentSound} workState={workState} setWorkState={setWorkState} />
  </div>
}

export default App;
