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
      <div className="editing"></div>
    </div>
  );
}

export default DataAndEditing;
