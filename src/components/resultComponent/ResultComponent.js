import React from "react";
const ResultComponent = ({ formData }) => {
  const basicSalary = (formData.salary / 100) * 80;
  const medicalAllowance = (formData.salary / 100) * 10;
  const specialAllowance = (formData.salary / 100) * 10;
  const totalAllowance =
    medicalAllowance +
    parseFloat(formData.otherallowance) +
    specialAllowance +
    parseFloat(formData.ogbonus) +
    parseFloat(formData.overtime);
  const totalDeduction =
    parseFloat(formData.tax) +
    parseFloat(formData.advances) +
    parseFloat(formData.leave) +
    parseFloat(formData.pf) +
    parseFloat(formData.lunch) +
    parseFloat(formData.otherDeductions) +
    parseFloat(formData.loanDeduction);
  const grossSalary =
    basicSalary +
    parseFloat(formData.otherallowance) +
    specialAllowance +
    parseFloat(formData.ogbonus) +
    parseFloat(formData.overtime);
  const netSalary = grossSalary - totalDeduction + medicalAllowance;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        width: "80%",
        margin: "auto",
      }}
    >
      <h2>Salary Calculator</h2>
      <p>
        <span style={{ fontWeight: "bold" }}>Salary:</span> {formData.salary}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Basic Salary:</span> {basicSalary}
      </p>
      <h2>Allowance & Bonuses</h2>
      <p>
        <span style={{ fontWeight: "bold" }}>Medical Allowance:</span>{" "}
        {medicalAllowance}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Other Allowance:</span>{" "}
        {formData.otherallowance}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Special Allowance:</span>{" "}
        {specialAllowance}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>OG Bonus:</span> {formData.ogbonus}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Overtime Amount : </span>
        {formData.overtime}
      </p>
      <h2>Deductions</h2>
      <p>
        <span style={{ fontWeight: "bold" }}>Tax: </span>
        {formData.tax}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Advances: </span>
        {formData.advances}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>leave Deduction:</span>{" "}
        {formData.leave}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>PF: </span>
        {formData.pf}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Lunch Deduction:</span>{" "}
        {formData.lunch}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Other Deduction:</span>{" "}
        {formData.otherDeduction}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Loan Deduction: </span>
        {formData.loanDeduction}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Toatal Allowance :</span>{" "}
        {totalAllowance}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Total Deduction :</span>{" "}
        {totalDeduction}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Gross Salary :</span> {grossSalary}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Net Salary :</span> {netSalary}
      </p>
    </div>
  );
};

export default ResultComponent;
