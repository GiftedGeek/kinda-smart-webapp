import React from "react";
import './ImageLinkBar.css'

const ImageLinkBar = ({ onInputChange, onButtonSubmit }) => {
  return (
    <React.Fragment>
      <p className="f3">
        Give it a try to detect the faces in your Picture! It's kinda smart...
      </p>
      <div className="center">
        <div className='form center pa4 br3 shadow-4'>
          <input className="f4 pa2 w-70 center bn" placeholder='Paste Image link' type="text" onChange={onInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib bn bg-light-green" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageLinkBar;
