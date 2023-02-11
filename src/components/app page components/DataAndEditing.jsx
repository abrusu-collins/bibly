import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as htmlToImage from "html-to-image";
import backgrounds from "../../json files/backgrounds.json";
import fonts from "../../json files/fonts.json";


function DataAndEditing() {
  const verse = useSelector((state) => state.verse.verse);
  const reference = useSelector((state) => state.verse.reference);
  const [solidColor,setsolidColor] = useState("");
  const [isItalic,setItalics] = useState(false);
  const [borderRadius,setBorderRadius ]= useState(0);
  const [textColor,setTextColor]= useState("#fcfeff");
  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement("a");
    link.download = "verse.png";
    link.href = dataUrl;
    link.click();
  };

  function backgroundClick (e, backgroundCss ){
    e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild.style.backgroundImage = backgroundCss;
    let backgroundChildren = Array.from(
      e.currentTarget.parentElement.children
    );
    backgroundChildren.forEach((backgroundChild) => {
      if (backgroundChild.classList.contains("active")) {
        backgroundChild.classList.remove("active");
      }
    });
    e.currentTarget.classList.add("active");
  }

  const solidBackgroundHandler = (e)=>{
    // e.currentTarget.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.styles.backgroundImage=' ';
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.style.backgroundColor = solidColor;

  }

  function fontHandler(e,fontCss){
    e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild.style.fontFamily = fontCss;

  }
  
  const toggleItalics = (e) => {
    setItalics(!isItalic);
      isItalic? 
            e.currentTarget.parentElement.parentElement.firstChild.firstChild.firstChild.style.fontStyle="normal"
            :e.currentTarget.parentElement.parentElement.firstChild.firstChild.firstChild.style.fontStyle="italic";
      isItalic? 
            e.currentTarget.parentElement.parentElement.firstChild.firstChild.children[1].style.fontStyle="normal"
            :e.currentTarget.parentElement.parentElement.firstChild.firstChild.children[1].style.fontStyle="italic";

  }

  return (
    <div className="dataandediting">
      <div className="data">
        <div className="versediv" id="domEl" ref={domEl} style={{ borderRadius:`${borderRadius}px`}}>
          <p className="verse"  style={{ color:`${textColor}`}}>{verse}</p>
          <p className="reference"  style={{ color:`${textColor}`}}>{reference}</p>
        </div>
        <div className="share-and-download">
          <button onClick={downloadImage}>Download Image</button>
          <button>Share Image</button>
        </div>
      </div>

      <div className="editing">
        <p className="edit-header">Editing Options here👇</p>
        <p className="backgrounds-title">Select Backgrounds</p>

        <div className="backgrounds">
          {backgrounds.map((background) => {
            return (
              <div
                key={background.id}
                style={{ backgroundImage: background.css }}
                className={background.className==="one"?"active":background.className}
                onClick={ (e)=>{backgroundClick(e, background.css)}}
              ></div>
            );
          })}
        </div>

        <div className="solid-background">
          <p className="solid-background-color-title">
            Wanna use a Solid Color?
          </p>
            <div className="solid-color-input-container">
                <input 
                type="text"
                name="solidColor" 
                id="solid-color"
                placeholder="Input HEX color code here"
                value={solidColor} 
                onChange={(e)=>{setsolidColor(e.currentTarget.value)}} />
                <button onClick={solidBackgroundHandler}>Use</button>

            </div>
        </div>

        <div className="fonts">
          <p className="fonts-title">Choose your font</p>
          <select name="fonts" id="fonts"
          onChange={(e)=>{fontHandler(e, e.currentTarget.value)}}>
          {fonts.map((font)=>{
           return <option 
           key={font.id}
            value={font.fontFamily}
            >{font.fontName}
            </option>
          })}
          </select>
        </div>

          <button onClick={toggleItalics} className="italics-button">
            {isItalic?"Use Normal":"Use Italics"}
          </button>

          <div className="text-color">
            <p className="text-color-title">Change text Color</p>
            <div className="text-color-input-container">
            <input 
            type="text"
             name="text-color"
              id="text-color"
              onChange={(e)=>{
                if (e.currentTarget.value.length===7){
                  console.log("eii")
                  setTextColor(e.currentTarget.value)
                }
              }}
              placeholder="Input HEX color code here"
              />
            </div>
          </div>

          <div className="border-radius">
            <p className="border-radius-title">Change border radius</p>
            <input 
            type="number"
             name="border-radius"
             value={borderRadius}
              id="border-radius" 
              placeholder="The corners will be more rounded the higher the number"
              onChange={(e)=>{setBorderRadius(e.currentTarget.value)}}
              />
          </div>
      </div>
      
    </div>
  );
}

export default DataAndEditing;
