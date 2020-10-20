import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <React.Fragment>
      <div className="center ma">
        <div className="absolute mt4">
          <img id='inputImage' src={imageURL} alt="Subject" width='500px' height='auto'/>
          <div className='bounding-box'style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaceRecognition;
