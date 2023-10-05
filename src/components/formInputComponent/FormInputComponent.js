import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "./FormInputComponent.css";

const FormInputComponent = ({ setFormData }) => {
  const [show, setShow] = useState(false);

  const {
    register,
    // formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
    //   salary:  0 ,
      otherallowance: 0,
      ogbonus: 0,
      overtime: 0,
      tax: 0,
      advances: 0,
      leave: 0,
      pf: 0,
      lunch: 0,
      otherDeductions: 0,
      loanDeduction: 0,
    },
  });
  const onSubmit = (data) => {
    console.log("Form data:", data);
    setFormData(data);
    setShow(true);
    reset();
  };

  return (
    <Container maxWidth="sm" className="main-container">
      <h1>Salary Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Salary"
          type="number"
          name="salary"
          variant="outlined"
          fullWidth
          margin="dense"
         
          {...register("salary", { valueAsNumber: true , required: true })}
        />
        <TextField
          label="Other Allowance"
          type="number"
          name="otherallowance"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("otherallowance", { valueAsNumber: true })}
        />
        <TextField
          label="OG Bonus"
          type="number"
          name="ogbonus"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("ogbonus", { valueAsNumber: true })}
        />

        <TextField
          label="Overtime Amount"
          type="number"
          name="overtime"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("overtime", { valueAsNumber: true })}
        />
        <TextField
          label="Tax"
          type="number"
          name="tax"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("tax", { valueAsNumber: true })}
        />
        <TextField
          label="Advances"
          type="number"
          name="advances"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("advances", { valueAsNumber: true })}
        />
        <TextField
          label="Leave Deductions"
          type="number"
          name="leave"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("leave", { valueAsNumber: true })}
        />
        <TextField
          label="PF"
          type="number"
          name="pf"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("pf", { valueAsNumber: true })}
        />
        <TextField
          label="Lunch Deduction"
          type="number"
          name="lunch"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("lunch", { valueAsNumber: true })}
        />
        <TextField
          label="Other Deductions"
          type="number"
          name="otherDeductions"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("otherDeductions", { valueAsNumber: true })}
        />

        <TextField
          label="Loan Deduction"
          type="number"
          name="loanDeduction"
          variant="outlined"
          fullWidth
          margin="dense"
          {...register("loanDeduction", { valueAsNumber: true })}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="calculate"
        >
          Calculate
        </Button>
      </form>
    </Container>
  );
};

export default FormInputComponent;
