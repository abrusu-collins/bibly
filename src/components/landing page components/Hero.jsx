import heroImg from "../../imgs/hero-img1.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-title">Bibly</p>
        <p className="hero-description">
          This app is a platform for generating and sharing beautiful images of
          Bible verses. The app aims to provide a visually appealing and
          inspiring way for people to connect with the teachings of the Bible.
        </p>
        <a href="">Start Generator</a>
      </div>

      <img src={heroImg} alt="heroImage" />
    </div>
  );
}

export default Hero;
