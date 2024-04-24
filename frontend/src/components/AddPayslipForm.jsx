import React, { useState } from 'react';

function AddPayslipForm({ onSave }) {
  const [driverNo, setDriverNo] = useState('');
  const [HMdate, setHMdate] = useState('');
  const [specialAllowance, setSpecialAllowance] = useState('');
  const [grossSalary, setGrossSalary] = useState('');
  const [netSalary, setNetSalary] = useState('');

  const handleSave = () => {
    // Calculate gross salary
    const basic = 2000;
    const costOfLiving = 500;
    const calculatedGrossSalary = basic + costOfLiving + parseInt(specialAllowance);
  
    // Calculate net salary
    const calculatedNetSalary = calculatedGrossSalary - 400;
  
    console.log("Special Allowance:", specialAllowance);
    console.log("Gross Salary:", calculatedGrossSalary);
    console.log("Net Salary:", calculatedNetSalary);
  
    // Save the payslip
    onSave({
      driverNo,
      HMdate: HMdate * 1000,
      specialAllowance: parseInt(specialAllowance),
      grossSalary: calculatedGrossSalary,
      netSalary: calculatedNetSalary
    });
  };
  // Update special allowance, gross salary, and net salary when HMdate changes
  const handleHMdateChange = (value) => {
    setHMdate(value);
    const calculatedGrossSalary = 2000 + 500 + parseInt(specialAllowance);
    setGrossSalary(calculatedGrossSalary);
    setNetSalary(calculatedGrossSalary - 400);
  };

  // Update gross salary and net salary when special allowance changes
  const handleSpecialAllowanceChange = (value) => {
    setSpecialAllowance(value);
    const calculatedGrossSalary = 2000 + 500 + parseInt(value);
    setGrossSalary(calculatedGrossSalary);
    setNetSalary(calculatedGrossSalary - 400);
  };

  return (
    <div>
      <h2>Add Payslip</h2>
      <form>
        <label>
          Driver Number:
          <input
            type="text"
            value={driverNo}
            onChange={(e) => setDriverNo(e.target.value)}
          />
        </label>
        <br />
        <label>
          HMdate:
          <input
            type="number"
            value={HMdate}
            onChange={(e) => handleHMdateChange(e.target.value)}
          />
        </label>
        <br />
        <label>
          Special Allowance:
          <input
            type="number"
            value={specialAllowance}
            onChange={(e) => handleSpecialAllowanceChange(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label>Calculated Special Allowance: {specialAllowance}</label>
          <br />
          <label>Calculated Gross Salary: {grossSalary}</label>
          <br />
          <label>Calculated Net Salary: {netSalary}</label>
        </div>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

export default AddPayslipForm;
