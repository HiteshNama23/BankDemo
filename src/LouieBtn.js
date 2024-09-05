import React from 'react';
import './LouieBtn.css';
import LouieImage from './res/louie_img_icn_1.png'; // Adjust the path to your image

const LouieBtn = () => {
  return (
    <div className="louie-button">
      <img src={LouieImage} alt="Louie Button" />
    </div>
  );
};

export default LouieBtn;
