import star from "../../imgs/star.png";

function Steps() {
  return (
    <div className="steps">
      <p className="header">Steps to generate your Image</p>
      <div className="img1">
        <img src={star} alt="" />
      </div>
      <div className="steps-div">
        <div className="step1">
            <p className="step-header">Click on the "Start Generator" button</p>
          <p className="number">1</p>
          <p className="step-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            sapiente nulla adipisci non repudiandae, animi aliquam quae
            cupiditate, cumque iusto ratione corporis delectus aut eos pariatur?
            Aperiam magnam voluptas dolor.
          </p>
        </div>

        <div className="step1">
        <p className="step-header">Choose your bible verse</p>
          <p className="number">2</p>
          <p className="step-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            sapiente nulla adipisci non repudiandae, animi aliquam quae
            cupiditate, cumque iusto ratione corporis delectus aut eos pariatur?
            Aperiam magnam voluptas dolor.
          </p>
        </div>

        <div className="step1">
        <p className="step-header">Customize your image</p>
          <p className="number">3</p>
          <p className="step-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            sapiente nulla adipisci non repudiandae, animi aliquam quae
            cupiditate, cumque iusto ratione corporis delectus aut eos pariatur?
            Aperiam magnam voluptas dolor.
          </p>
        </div>

        <div className="step1">
        <p className="step-header">Save or Share</p>
          <p className="number">4</p>
          <p className="step-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            sapiente nulla adipisci non repudiandae, animi aliquam quae
            cupiditate, cumque iusto ratione corporis delectus aut eos pariatur?
            Aperiam magnam voluptas dolor.
          </p>
        </div>
      </div>
      <div className="img2">
        <img src={star} alt="" />
      </div>
    </div>
  );
}

export default Steps;
