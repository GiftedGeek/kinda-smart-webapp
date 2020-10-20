import React from "react";
import Tilt from "react-tilt";
import logo from './smart.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className="Tilt br2 shadow-2 back"
        options={{ max: 45, perspective: 500, speed: 400, easing:"cubic-bezier(.03,.98,.52,.99)", reverse: false}}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
            <img style={{paddingTop: '5px'}} src={logo} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
