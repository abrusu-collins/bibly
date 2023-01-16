import { useSelector } from "react-redux";

function DataAndEditing() {
    const verse = useSelector((state) => state.verse.verse);
    const reference = useSelector((state) => state.verse.reference);

  return (
    <div className="dataandediting">
      <div className="data">
        <p className="verse">{verse}</p>
        <p className="reference">{reference}</p>
      </div>

      <div className="editing">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod ratione exercitationem dolor corrupti corporis sint ex consequuntur officiis sed! Exercitationem obcaecati incidunt suscipit nobis optio culpa officiis itaque porro?</p>
      </div>
    </div>
  );
}

export default DataAndEditing;
