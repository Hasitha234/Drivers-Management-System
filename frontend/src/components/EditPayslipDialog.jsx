import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../assets/css/EditPayslipDialog.css'; // Import CSS file

const EditPayslipDialog = ({ payslip, onClose, onUpdate }) => {
  const [editedPayslip, setEditedPayslip] = useState({ ...payslip });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPayslip({ ...editedPayslip, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/payslips/${payslip._id}`, editedPayslip);
      onUpdate(editedPayslip);
      onClose();
      alert('Payslip updated successfully!');
    } catch (error) {
      console.error('Error updating payslip:', error);
    }
  };

  return (
    <div className="dialog-container">
      <div className="dialog">
        <h2>Edit Payslip</h2>
        <form onSubmit={handleSubmit} style={{ width: '400px', height: '540px' }}>
          <TextField
            label="Driver Number"
            name="driverNo"
            value={editedPayslip.driverNo}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline={true}
            rows={2}
            style={{ marginBottom: '10px', marginTop: '10px' ,paddingRight:'10px'}}
          />
          <TextField
            label="HM Date"
            type="number"
            name="HMdate"
            value={editedPayslip.HMdate}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline={true}
            rows={2}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Special Allowance"
            type="number"
            name="specialAllowance"
            value={editedPayslip.specialAllowance}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline={true}
            rows={2}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Gross Salary"
            type="number"
            name="grossSalary"
            value={editedPayslip.grossSalary}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline={true}
            rows={2}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Net Salary"
            type="number"
            name="netSalary"
            value={editedPayslip.netSalary}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline={true}
            rows={2}
            style={{ marginBottom: '10px' }}
          />
          <div className="button-container" style={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary" className="update-button">Update</Button>
            <Button type="button" variant="contained" color="secondary" onClick={onClose} className="cancel-button" style={{ marginLeft: '10px' }}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPayslipDialog;
