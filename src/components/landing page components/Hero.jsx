import heroImg from "../../imgs/hero-img.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-title">Bibly</p>
        <p className="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod facere, officiis explicabo ut illum laudantium recusandae dignissimos reprehenderit! Molestiae facere dolores nemo natus delectus veritatis atque temporibus maiores ea.</p>
      <a href="">Start Generator</a>
      </div>

      <img src={heroImg} alt="heroImage" />
    </div>
  );
}

export default Hero;
