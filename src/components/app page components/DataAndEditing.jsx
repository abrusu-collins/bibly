import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as htmlToImage from "html-to-image";
import backgrounds from "../../json files/backgrounds.json";
import fonts from "../../json files/fonts.json";


function DataAndEditing() {
  const verse = useSelector((state) => state.verse.verse);
  const reference = useSelector((state) => state.verse.reference);
  const [background,setBackground] = useState("");
  const [isItalic,setItalics] = useState(false);
  const [fontFamily,setFontFamily]= useState(" ");
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

  const  backgroundClick = (e)=>{
    setBackground(e.currentTarget.style.background);
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


  return (
    <div className="dataandediting">
      <div className="data">
        <div className="versediv" id="domEl" ref={domEl} style={{ borderRadius:`${borderRadius}px`,fontFamily:fontFamily, background:background}}>
          <p className="verse"  style={{ color:`${textColor}`,fontStyle: isItalic? "italic":"normal" }}>{verse}</p>
          <p className="reference"  style={{ color:`${textColor}`,fontStyle: isItalic? "italic":"normal"}}>{reference}</p>
        </div>
        <div className="download">
          <button onClick={downloadImage}>Download Image</button>
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
                style={{ background: background.css }}
                className={background.className==="one"?"active":background.className}
                onClick={backgroundClick}
              ></div>
            );
          })}
        </div>

        <div className="solid-background">
          <p className="solid-background-color-title">
            Wanna use a solid color background?
          </p>
                <input 
                className="input"
                type="text"
                name="solidColor" 
                id="solid-color"
                placeholder="Input HEX color code here"
                onChange={(e)=>{e.currentTarget.value.length===7?setBackground(e.currentTarget.value):console.log("")}}
                 />
        </div>

        <div className="fonts">
          <p className="fonts-title">Choose your font</p>
          <select name="fonts" id="fonts"
          onChange={(e)=>{setFontFamily(e.currentTarget.value)}}>
          {fonts.map((font)=>{
           return <option 
           key={font.id}
            value={font.fontFamily}
            >{font.fontName}
            </option>
          })}
          </select>
        </div>

          <button onClick={(e)=>{setItalics(!isItalic)}} className="italics-button">
            {isItalic?"Use Normal":"Use Italics"}
          </button>

          <div className="text-color">
            <p className="text-color-title">Change text Color</p>
            <input 
            type="text"
             name="text-color"
              id="text-color"
              onChange={(e)=>{
                e.currentTarget.value.length===7?setTextColor(e.currentTarget.value):setTextColor("#fcfeff");
              }}
              placeholder="Input HEX color code here"
              />
            
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
