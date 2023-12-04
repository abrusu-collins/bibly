import facebook from "../../imgs/facebook.png";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import snapchat from "../../imgs/snapchat.png";

function Share() {
  return (
    <div className="share ">
      <p className="header">Instantly share to social media</p>
      <div className="socials">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={snapchat} alt="snapchat" />
      </div>
    </div>
  );
}

export default Share;
