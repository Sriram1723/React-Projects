import React from "react";
import { useState } from "react";
import "./styles.css";
export default function ColourGenerator() {
  const [colourType, setColourType] = useState("random");
  const [colour,setColour] = useState('red');
  
  const colours = ['red','blue','green','yellow','purple','orange','pink','brown','black','white'];
  const hexColours = "ABCDEF0123456789";

  function generateRandomColour(){
    const randIndex = Math.floor(Math.random()*colours.length);
    console.log(randIndex);
    setColour(colours[randIndex]);
  }

  function generateHexColour(){
    let str = '#';
    for(let i = 0;i<6;i++){
        const randIndex = Math.floor(Math.random()*hexColours.length);
        str += hexColours.charAt(randIndex);
    }
    setColour(str);
  }

  function generateRgbColour(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    setColour(`${'rgb('+r+','+g+','+b+')'}`)
  }


  function setRandomType() {
    setColourType("random");
  }
  function setHexType() {
    setColourType("hex");
  }
  function setRgbType() {
    setColourType("rgb");
  } 

  return (
    <div className="container" style={{backgroundColor:colour}}>
       <div className="title" style={{color:colour}}>Random Colour Generator</div>
      <div className="buttons">
        <button onClick={() => setRandomType()}>Random colour</button>
        <button onClick={() => setHexType()}>Hex Colour</button>
        <button onClick={() => setRgbType()}>RGB Colour</button>
      </div>
      <div className="generate-colour">
        <h1>{colour}</h1>
        <button onClick={()=>colourType === 'random' ? generateRandomColour() 
            : colourType === 'hex' ? generateHexColour() : generateRgbColour() 
            }>Generate Colour</button>
      </div>
    </div>
  );
}
