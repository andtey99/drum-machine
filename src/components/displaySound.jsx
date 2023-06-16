import React, { useEffect } from "react";
import "../styles/displaySound.css";
import phrases from "../utils/phrases";

const DisplaySound = ({ currentSound, setCurrentSound, workState, setWorkState }) => {
    
    useEffect(() => setInterval(() => setCurrentSound(phrases[Math.floor(Math.random() * phrases.length)]), 5000), [])
    return <div className="displaySound">
        <div className="power">
            <h3>Powered by<br /><a href="https://github.com/andtey99">Andrey Begashev</a></h3>
            <div className={"toggler " + (workState ? "" : "disabled")} onClick={() => setWorkState(!workState)}>
                <div className="block"></div>
            </div>
        </div>
        <span>{currentSound}</span>
    </div>
}

export default DisplaySound;