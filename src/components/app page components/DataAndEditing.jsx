import { useSelector } from "react-redux";
import a from "../../json files/backgrounds.json";
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod ratione exercitationem dolor corrupti corporis sint ex consequuntur officiis sed! Exercitationem obcaecati incidunt suscipit nobis optio culpa officiis itaque porro?
          {a.map((aa)=>{
            return <div key={aa.id} style={{"backgroundImage":aa.css}}>{aa.css}</div>
          })}
        </p>
      </div>
    </div>
  );
}

export default DataAndEditing;
