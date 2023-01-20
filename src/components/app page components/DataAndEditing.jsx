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
          {backgrounds.map((background)=>{
            return <div key={background.id} style={{"backgroundImage":background.css}}></div>
          })}
      </div>
    </div>
  );
}

export default DataAndEditing;
