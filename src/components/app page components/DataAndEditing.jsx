import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import * as htmlToImage from "html-to-image";
import backgrounds from "../../json files/backgrounds.json";

function DataAndEditing() {
  const verse = useSelector((state) => state.verse.verse);
  const reference = useSelector((state) => state.verse.reference);
  const [solidColor,setsolidColor] = useState("");
  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement("a");
    link.download = "verse.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="dataandediting">
      <div className="data">
        <div className="versediv" id="domEl" ref={domEl}>
          <p className="verse">{verse}</p>
          <p className="reference">{reference}</p>
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
                onClick={(e) => {
                  e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild.style.backgroundImage = background.css;
                  let backgroundChildren = Array.from(
                    e.currentTarget.parentElement.children
                  );
                  backgroundChildren.forEach((backgroundChild) => {
                    if (backgroundChild.classList.contains("active")) {
                      backgroundChild.classList.remove("active");
                    }
                  });
                  e.currentTarget.classList.add("active");
                }}
              ></div>
            );
          })}
        </div>

        <div className="solid-background">
          <p className="solid-background-color-title">
            Wanna use a Solid Color?
          </p>
          {/* <input type="text" name="solidColor" id="solid-color" placeholder="Input HEX color code here"  value={solidColor} onChange={
            (e)=>{
              setsolidColor(e.currentTarget.value);
            if(solidColor.length===6){
              // e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild.attribues.remove("backgroundImage");
              e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild.style.backgroundColor = solidColor;
              console.log(solidColor)
            }
            }}/> */}
            <div className="solid-color-input-container">
                <input type="text" name="solidColor" id="solid-color" placeholder="Input HEX color code here"  value={solidColor} onChange={(e)=>{setsolidColor(e.currentTarget.value)}} />
                <button onClick={(e)=>{
                  // e.currentTarget.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.styles.backgroundImage=' ';
                  e.currentTarget.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.style.backgroundColor = solidColor;

                }}>Use</button>

            </div>
        </div>
      </div>
      
    </div>
  );
}

export default DataAndEditing;
