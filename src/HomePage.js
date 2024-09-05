import React from 'react';
import { useNavigate } from 'react-router-dom';
import LouieBtn from './LouieBtn';
import LangBtn from './LangBtn';
import './HomePage.css';
// import langImage from './res/langImg.png';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/second');
  };

  return (
    <div className="container">
      <h1>Louie Demo App</h1>
      <p className="para">This is the sample website for bank transfer through voice. Only microphone permission is needed. Please click on the mic button below to start voice.</p>
      <LangBtn/>
      <div className="bottom-buttons">
        <LouieBtn />
        <button className="next-button" onClick={handleButtonClick}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default HomePage;
