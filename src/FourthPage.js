import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FourthPage.css';

function FourthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: transactionDetails } = location;

  // State for current date and time
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Get current date and time
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    setCurrentDateTime(formattedDateTime);
  }, []);

  const handleBackToHome = () => {
    navigate('/second');
  };

  return (
    <div className="fourth-page-container">
      <h2>Transaction Successful.</h2>

      <div className="summary-container">
        <div className="check-icon">
          <span>✓</span>
        </div>
        <h3>Summary</h3>

        <div className="summary-details">
          <p><strong>From</strong>: Savings - General</p>
          <p>{transactionDetails.fromAccount}</p>

          <p><strong>To</strong>: {transactionDetails.toName}</p>
          <p>{transactionDetails.toAccount}</p>

          <p><strong>IFSC</strong>: {transactionDetails.ifscCode}</p>
          <p><strong>Bank Name</strong>: {transactionDetails.bankName}</p>

          <p><strong>Amount</strong>: ₹{transactionDetails.amount}</p>

          <p><strong>Reference Number</strong>: {transactionDetails.referenceNumber}</p>

          <p><strong>Date and Time</strong>: {currentDateTime}</p>
        </div>

        <button className="back-to-home-btn" onClick={handleBackToHome}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}

export default FourthPage;
