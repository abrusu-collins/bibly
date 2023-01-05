import bv1 from "../../imgs/bv-1.png";
import bv2 from "../../imgs/bv-2.png";
import bv3 from "../../imgs/bv-3.png";
import bv4 from "../../imgs/bv-4.png";
// import bv5 from "../../imgs/bv-5.png";
import bv6 from "../../imgs/bv-6.png";
import bv7 from "../../imgs/bv-7.png";
import bv8 from "../../imgs/bv-8.png";
import bv9 from "../../imgs/bv-9.png";
import bv10 from "../../imgs/bv-10.png";

function Marquee() {
  return (
    <div className="marquee">
      <p className="header">Share beautiful images of scriptures.</p>
      <p className="text">
        Quickly generate and share aesthetically pleasing images of bible verses like the ones below.
      </p>
      <div className="top">
        <img src={bv1} alt="" />
        <img src={bv2} alt="" />
        <img src={bv3} alt="" />
        <img src={bv4} alt="" />
        {/* <img src={bv5} alt="" /> */}
        <img src={bv6} alt="" />
        <img src={bv7} alt="" />
        <img src={bv8} alt="" />
        <img src={bv9} alt="" />
        <img src={bv10} alt="" />
      </div>
    </div>
  );
}

export default Marquee;
