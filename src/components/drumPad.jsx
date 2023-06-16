import React, { useEffect } from "react";
import "../styles/drumPad.css"

const DrumPad = ({ setCurrentSound, workState }) => {

    let buttons = [];

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        buttons = document.querySelectorAll('button');
    }, []);

    Audio.prototype.playSound = function() {
        if (workState) this.play();
    }

    function handleKeyDown(e) {
        switch(e.code) {
            case "KeyQ":
                buttons[0].classList.add("active");
                setCurrentSound("Heater 1")
                new Audio("../audio/Heater-1.mp3").playSound();
                break;
            case "KeyW":
                buttons[1].classList.add("active");
                setCurrentSound("Heater 2")
                new Audio("../audio/Heater-2.mp3").playSound();
                break;
            case "KeyE":
                buttons[2].classList.add("active");
                setCurrentSound("Heater 3")
                new Audio("../audio/Heater-3.mp3").playSound();
                break;
            case "KeyA":
                buttons[3].classList.add("active");
                setCurrentSound("Heater 4")
                new Audio("../audio/Heater-4.mp3").playSound();
                break;
            case "KeyS":
                buttons[4].classList.add("active");
                setCurrentSound("Clap")
                new Audio("../audio/Clap.mp3").playSound();
                break;
            case "KeyD":
                buttons[5].classList.add("active");
                setCurrentSound("Open HH")
                new Audio("../audio/Open-HH.mp3").playSound();
                break;
            case "KeyZ":
                buttons[6].classList.add("active");
                setCurrentSound("Kick n' Hat")
                new Audio("../audio/Kick_n_Hat.mp3").playSound();
                break;
            case "KeyX":
                buttons[7].classList.add("active");
                setCurrentSound("Kick")
                new Audio("../audio/Kick.mp3").playSound();
                break;
            case "KeyC":
                buttons[8].classList.add("active");
                setCurrentSound("Closed HH")
                new Audio("../audio/Closed-HH.mp3").playSound();
                break;
        }
    }

    function handleKeyUp(e) {
        switch(e.code) {
            case "KeyQ":
                buttons[0].classList.remove("active");
                break;
            case "KeyW":
                buttons[1].classList.remove("active");
                break;
            case "KeyE":
                buttons[2].classList.remove("active");
                break;
            case "KeyA":
                buttons[3].classList.remove("active");
                break;
            case "KeyS":
                buttons[4].classList.remove("active");
                break;
            case "KeyD":
                buttons[5].classList.remove("active");
                break;
            case "KeyZ":
                buttons[6].classList.remove("active");
                break;
            case "KeyX":
                buttons[7].classList.remove("active");
                break;
            case "KeyC":
                buttons[8].classList.remove("active");
                break;
        }
    }

    return <div className="drum-machine-pads">
        <button id="Q" disabled={!workState} onClick={() => {
            new Audio("../audio/Heater-1.mp3").playSound();
            setCurrentSound("Heater 1")
        }}>Q</button>
        <button id="W" disabled={!workState} onClick={() => {
            new Audio("../audio/Heater-2.mp3").playSound();
            setCurrentSound("Heater 2");
    }}>W</button>
        <button id="E" disabled={!workState} onClick={() => {
            new Audio("../audio/Heater-3.mp3").playSound();
            setCurrentSound("Heater 3");
    }}>E</button>
        <button id="A" disabled={!workState} onClick={() => {
            new Audio("../audio/Heater-4.mp3").playSound();
            setCurrentSound("Heater 4");
    }}>A</button>
        <button id="S" disabled={!workState} onClick={() => {
            new Audio("../audio/Clap.mp3").playSound();
            setCurrentSound("Clap");
    }}>S</button>
        <button id="D" disabled={!workState} onClick={() => {
            new Audio("../audio/Open-HH.mp3").playSound();
            setCurrentSound("Open HH");
    }}>D</button>
        <button id="Z" disabled={!workState} onClick={() => {
            new Audio("../audio/Kick_n_Hat.mp3").playSound();
            setCurrentSound("Kick n' Hat");
    }}>Z</button>
        <button id="X" disabled={!workState} onClick={() => {
            new Audio("../audio/Kick.mp3").playSound();
            setCurrentSound("Kick");
    }}>X</button>
        <button id="C" disabled={!workState} onClick={() => {
            new Audio("../audio/Closed-HH.mp3").playSound();
            setCurrentSound("Closed HH");
    }}>C</button>
    </div>
}

export default DrumPad;