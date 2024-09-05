// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import PayeesList from './PayeesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage/>} />
        <Route path="/fourth" element={<FourthPage/>} />
        <Route path="/payeeslist" element={<PayeesList/>} />
      </Routes>
    </Router>
  );
}

export default App;
