import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/AddPayslipForm.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar'; // Import the ResponsiveAppBar component

const AddPayslipForm = () => {
  const [formData, setFormData] = useState({
    driverNo: '',
    HMdate: '',
    specialAllowance: '',
    grossSalary: '',
    netSalary: ''
  });
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3001/employees/get');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === 'HMdate') {
      const parsedValue = parseInt(value);
      if (parsedValue >= 0) {
        const specialAllowance = parsedValue * 1000;
        const grossSalary = specialAllowance + 2500;
        const netSalary = grossSalary - 400;
        setFormData({ ...formData, [name]: value, specialAllowance, grossSalary, netSalary });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/payslips/add', formData);
      alert('Payslip added successfully!');
      setFormData({
        driverNo: '',
        HMdate: '',
        specialAllowance: '',
        grossSalary: '',
        netSalary: ''
      });
    } catch (error) {
      console.error('Error adding payslip:', error);
    }
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="centered-container">
        <div className="card">
          <h2>Add Payslip</h2>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Driver Number:
              <select
                name="driverNo"
                value={formData.driverNo}
                onChange={handleChange}
                required
              >
                <option value="">Select Driver</option>
                {employees.map((employee) => (
                  <option key={employee._id} value={employee.empId}>
                    {employee.empId}
                  </option>
                ))}
              </select>
            </label>
            <label>
              How Many Days:
              <input
                type="number"
                name="HMdate"
                value={formData.HMdate}
                onChange={handleChange}
                required
              />
            </label>
            <label>Basic: 2000</label>
            <label>Cost Of Living: 500</label>
            <label>
              Special Allowance:
              <input
                type="number"
                name="specialAllowance"
                value={formData.specialAllowance}
                onChange={handleChange}
                readOnly
                required
              />
            </label>
            <label>
              Gross Salary:
              <input
                type="number"
                name="grossSalary"
                value={formData.grossSalary}
                onChange={handleChange}
                readOnly
                required
              />
            </label>
            <label>EPF: 200</label>
            <label>Pay Tax: 150</label>
            <label>Stamp Duty: 50</label>
            <label>
              Net Salary:
              <input
                type="number"
                name="netSalary"
                value={formData.netSalary}
                onChange={handleChange}
                readOnly
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPayslipForm;
