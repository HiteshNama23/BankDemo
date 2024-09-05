import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LouieBtn from './LouieBtn';
import './SecondPage.css';
import PayeesList from './PayeesList';

function SecondPage() {
  const [balanceShown, setBalanceShown] = useState(false);
  const [balance, setBalance] = useState(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigates to HomePage
  };

  const handleViewBalanceClick = () => {
    setBalanceShown(true);
    setBalance('Rs. 1,323,123,3123'); // Set this dynamically if fetched from API
  };

  return (
    <div className="second-page">
      {/* Bank Transfer Header */}
      <div className="header">
        <button onClick={handleBackClick} className="back-btn">{'<'}</button>
        <h1 className="title">Bank Transfer</h1>
      </div>

      {/* Transfer From Section */}
      <div className="account-card">
        <h2 className="transfer">Transfer From</h2>
        <div className="account-number-card">
          <span>Account Number</span>
          <h2>1234 0530 0001 7556</h2>
          <button onClick={handleViewBalanceClick} className="balance-btn">
            {balanceShown ? balance : 'View Balance'}
          </button>
        </div>
      </div>

      {/* Added Payees List */}
      <PayeesList/>
      <LouieBtn />
    </div>
  );
}

export default SecondPage;
