import star from "../../imgs/star.png";

function Steps() {
  return (
    <div className="steps container">
      <p className="header">Steps to generate your Image</p>
      <div className="img1">
        <img src={star} alt="" />
      </div>
      <div className="steps-div">
        <div className="step1">
        <p className="number">1</p>
            <p className="step-header">Click "Start Generator" button</p>
          <p className="step-description">
          Are you ready to create something amazing? 
          Click the "start generator" button at the top to kick off the process
           and see what our tool can do for you.
          </p>
        </div>

        <div className="step1">
        <p className="number">2</p>
        <p className="step-header">Choose your bible verse</p>
          <p className="step-description">
            You'll be taken to the app page. On the app page, you can 
            generate your verse by using a reference, topic or you 
            can discover random verses.
          </p>
        </div>

        <div className="step1">
        <p className="number">3</p>
        <p className="step-header">Customize your image</p>
          <p className="step-description">
             After generating your verse, you have options to edit the appearance 
             of the verse to make it more pleasing and enticing.
             You can change background, fonts, border radius and a whole lot.
          </p>
        </div>

        <div className="step1">
        <p className="number">4</p>
        <p className="step-header">Save or Share</p>
          <p className="step-description">
        After generating and editing, you can now download the image and share on your 
        preferred social media site or do whatever you want to do with it.
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
