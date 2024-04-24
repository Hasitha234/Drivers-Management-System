import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/HomePage.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import background from '../../src/assets/b1.jpeg';
import add from '../../src/assets/add.jpeg';
import slips from '../../src/assets/slips.png';

const HomePage = () => {
  return (
    <div className="homepage" style={{backgroundImage: `url(${background})`}}>
      <ResponsiveAppBar />
      <div className="content">
        <h1 className="main-heading">Welcome to the Payslip Management</h1>
        <div className="button-container">
          <Link to="/payslips" className="button" style={{backgroundImage: `url(${add})`}}>Add Payslip</Link>
          <Link to="/payslips-list" className="button" style={{backgroundImage: `url(${slips})`}}>Payslips</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
