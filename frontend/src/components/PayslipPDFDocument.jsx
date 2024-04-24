import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: 'center',
  },
});

// Component function
const PayslipPDFDocument = ({ payslip }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Driver Number: {payslip.driverNo}</Text>
        <Text>HM Date: {payslip.HMdate}</Text>
        <Text>Special Allowance: {payslip.specialAllowance}</Text>
        <Text>Gross Salary: {payslip.grossSalary}</Text>
        <Text>Net Salary: {payslip.netSalary}</Text>
      </View>
    </Page>
  </Document>
);

export default PayslipPDFDocument;
