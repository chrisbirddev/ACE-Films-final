import React from 'react';
import '../css/pages.css';
import BackgroundImage from '../components/BackgroundImage';

const Account = () => {
  return (
    <div className="bannerContainer">
      
      <div className='style'>
        <h1>My Account</h1>
      </div>
      <div className='box'>
        <div className="boxes">
          <p>Change Password</p>
          <p>Forgotten your password? No problem, click the button below to create a new one.</p>
          <button>here</button>
        </div>
        <div className="boxes">
          <p>Change Email</p>
          <p>Want to change your email address? No problem, click the button below to update.</p>
          <button>here</button>
        </div>
      </div>
      <div className="box">
        <div className="boxes">
          <p>Change Subscription</p>
          <p>Want to change your subscription? No problem, click the button below to pick a new plan.</p>
          <button>here</button>
        </div>
        <div className="boxes">
          <p>Change Payment Method</p>
          <p>Want to change how you pay? No problem, click the button below to update.</p>
          <button>here</button>
        </div>
      </div>
      <br/>
      <div className='cancel'>
        <button className='cancel-button'>Cancel Subscription</button>
      </div>
      
    </div>    
  );
};

export default Account;