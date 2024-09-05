import React, { useState } from 'react';
import './LangBtn.css';
import langImage from './res/langImg.png'; // Adjust the path to your image

const LangBtn = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="lang-btn-container">
      <img
        className="lang-btn"
        src={langImage}
        alt="Change Language"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="dropdown">
          <label>
            <input
              type="radio"
              name="language"
              value="English"
              checked={selectedLanguage === 'English'}
              onChange={handleLanguageChange}
            />
            English
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="Spanish"
              checked={selectedLanguage === 'Spanish'}
              onChange={handleLanguageChange}
            />
            Spanish
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="French"
              checked={selectedLanguage === 'French'}
              onChange={handleLanguageChange}
            />
            French
          </label>
        </div>
      )}
    </div>
  );
};

export default LangBtn;
