import React from "react";
import {MdLanguage} from 'react-icons/md'
import './translation.css'

const Translation = ({ currentLanguage, onLanguageChange }) => {
    const changeLanguage = (currentLanguage) => {
      return currentLanguage === "en" ? "pt" : "en";
    };
  
    const handleLanguageChange = () => {
      const newLanguage = changeLanguage(currentLanguage);
      onLanguageChange(newLanguage);
    };
  
    return (
      <div className="translation__container">
          <MdLanguage className="translation__icon" onClick={handleLanguageChange}/>
      </div>
    );
  };

export default Translation;
