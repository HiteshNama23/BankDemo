import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PayeesList.css';

const PayeesList = () => {
  const navigate = useNavigate();

  // Sample data, replace this with your dynamic payees data
  const payees = [
    { name: 'Sophia', bank: 'CSB Bank', accountNumber: '000136528973' },
    { name: 'Smith', bank: 'Standard Chartered Bank', accountNumber: '023428937' },
    { name: 'Ajith', bank: 'CSB Bank', accountNumber: '23410954779' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    { name: 'Lalitha', bank: 'CSB Bank', accountNumber: '000129564552' },
    // Add more payees
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Handle navigation to third screen by passing user data
  const handlePayeeClick = (payee) => {
    navigate('/third', { state: { payee } });
  };

  // Filter payees based on search query
  const filteredPayees = payees.filter(
    (payee) =>
      payee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payee.bank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payee.accountNumber.includes(searchQuery)
  );

  return (
    <div className="payees-container">
      {/* Search bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search Payees"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Scrollable payees list */}
      <ul className="payees-list">
        {filteredPayees.map((payee, index) => (
          <li key={index} className="payee-item" onClick={() => handlePayeeClick(payee)}>
            <div className="payee-info">
              <span className="payee-name">{payee.name}</span>
              <span className="payee-bank">{payee.bank}</span>
            </div>
            <span className="payee-account">{payee.accountNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PayeesList;
