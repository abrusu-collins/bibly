import { useSelector } from "react-redux";
import backgrounds from "../../json files/backgrounds.json";
function DataAndEditing() {
    const verse = useSelector((state) => state.verse.verse);
    const reference = useSelector((state) => state.verse.reference);

  return (
    <div className="dataandediting">
      <div className="data">
        <div className="versediv">
        <p className="verse">{verse}</p>
        <p className="reference">{reference}</p>
        </div>

      </div>

      <div className="editing">
        <p className="edit-header">Editting Options here👇</p>
      <p className="backgrounds-title">Select Backgrounds</p>
      <div className="backgrounds">
        {backgrounds.map((background)=>{
            return <div key={background.id} style={{"backgroundImage":background.css}} className={background.className}></div>
          })}
      </div>
      </div>
    </div>
  );
}

export default DataAndEditing;
