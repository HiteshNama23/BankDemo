import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ThirdPage.css';
import LouieBtn from './LouieBtn';

function ThirdPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the payee data from the location state
  const { payee } = location.state || { payee: {} };

  const [amount, setAmount] = useState('');
  const [transferType, setTransferType] = useState('IMPS');
  const [error, setError] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setError('');
  };

  const handleTransferTypeChange = (type) => {
    setTransferType(type);
    setError('');
  };

  const handleChangePayee = () => {
    // Navigate to PayeesList page to change payee
    navigate('/payeeslist');
  };

  const handleTransferNow = () => {
    let maxAmount = 0;
    let minAmount = 0;

    switch (transferType) {
      case 'IMPS':
        maxAmount = 500000;
        break;
      case 'NEFT':
        maxAmount = 2000000;
        break;
      case 'RTGS':
        minAmount = 200000;
        maxAmount = 2000000;
        break;
      default:
        break;
    }

    if (!amount) {
      setError('Amount cannot be empty.');
      return;
    }

    const parsedAmount = parseFloat(amount.replace(/,/g, ''));

    if (isNaN(parsedAmount)) {
      setError('Please enter a valid number.');
      return;
    }

    if (parsedAmount < minAmount || parsedAmount > maxAmount) {
      setError(
        `For ${transferType}, the amount must be between ₹${minAmount.toLocaleString()} and ₹${maxAmount.toLocaleString()}.`
      );
      return;
    }

    // If validations pass, navigate to the next screen
    const transactionDetails = {
      fromAccount: "5544 0580 0017 5438", // Example from account
      toName: payee.name,
      toAccount: payee.accountNumber,
      ifscCode: "IOBA00001506", // Example IFSC code
      bankName: payee.bank,
      amount: amount, // Assuming this is the amount entered by user
      referenceNumber: "288383933999" // Example reference number, this could be dynamically generated
    };
  
    navigate('/fourth', { state: transactionDetails });
  };

  return (
    <div className="third-page-container">
      <div className="header">
        <button onClick={() => navigate('/second')} className="back-btn">{'<'}</button>
        <h1 className="title">Bank Transfer</h1>
      </div>

      <div className="account-details">
        <h3>Debit Account</h3>
        <h4>Savings - General</h4>
        <h5>5544 0580 0017 5438</h5>
        <h3>Available Balance</h3><h4>₹ 5,20,000.50</h4>
      </div>

      <div className="credit-account-details">
        <h3>Credit Account Details</h3>
        <p>{payee.name || 'No Payee Selected'}</p>
        <p>{payee.accountNumber || 'No Account Number'}</p>
        <p>{payee.bank || 'No Bank'}</p>
        <p>
          Click here to
          <button className="change-payee-btn" onClick={handleChangePayee}>
            Change Payee
          </button>
        </p>
      </div>

      <div className="amount-section">
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Amount"
        />
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="transfer-type">
        <h3>Transfer Type</h3>
        <div className="transfer-options">
          <button
            className={transferType === 'IMPS' ? 'active' : ''}
            onClick={() => handleTransferTypeChange('IMPS')}
          >
            IMPS
          </button>
          <button
            className={transferType === 'NEFT' ? 'active' : ''}
            onClick={() => handleTransferTypeChange('NEFT')}
          >
            NEFT
          </button>
          <button
            className={transferType === 'RTGS' ? 'active' : ''}
            onClick={() => handleTransferTypeChange('RTGS')}
          >
            RTGS
          </button>
        </div>
        <p className="transfer-info">
          {transferType === 'IMPS' && 'Maximum ₹ 5 Lakhs per transaction, maximum ₹ 30 Lakhs per day. Works 24X7.'}
          {transferType === 'NEFT' && 'Maximum ₹ 20 Lakhs per day. Works 24X7.'}
          {transferType === 'RTGS' && 'Minimum ₹ 2 Lakhs, Maximum ₹ 20 Lakhs per transaction. Works 24X7.'}
        </p>
      </div>
      <LouieBtn/>
      <button className="transfer-now-btn" onClick={handleTransferNow}>
        TRANSFER NOW
      </button>
    </div>
  );
}

export default ThirdPage;
