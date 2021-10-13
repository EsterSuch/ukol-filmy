import React from 'react';
import '../Header/style.css';
import camera from '../Header/camera.svg';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <img className="logo" src={camera} alt="Logo" />V našem kině právě
        uvádíme
      </h1>
    </div>
  );
};

export default Header;
