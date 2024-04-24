// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payslips from './pages/payslips';
import HomePage from './pages/homePage';
import PayslipList from './pages/payslipList';

function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Wrap Routes around Route components */}
          <Route path="/payslips" element={<Payslips />} /> {/* Use element prop to specify component */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/payslips-list" element={<PayslipList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
