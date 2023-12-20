import React from 'react';
import '../css/FirstBanner.css';
import logo from '../images/logo.png'; 

const FirstBanner = () => {
  return (
    <div className="banner">
      <div className="banLogo">
        <img src={logo} alt="ACE Films Logo" />
      </div>
      <div className="signInSignUp">
        <button className="signInBanner">Sign In</button>
        <button className="signUpBanner">Sign Up</button>
      </div>
    </div>
  );
};

export default FirstBanner;