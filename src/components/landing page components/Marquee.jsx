import bv2 from "../../imgs/bv-2.png";
import bv3 from "../../imgs/bv-3.png";
import bv8 from "../../imgs/bv-8.png";
import bv9 from "../../imgs/bv-9.png";

function Marquee() {
  return (
    <div className="marquee ">
      <p className="header">Share beautiful images of scriptures.</p>
      <p className="text">
        Quickly generate and share aesthetically pleasing images of bible verses like the ones below.
      </p>
      <div className="top container">
        <img src={bv2} alt="" />
        <img src={bv3} alt="" />
        <img src={bv8} alt="" />
        <img src={bv9} alt="" />
      </div>
    </div>
  );
}

export default Marquee;
