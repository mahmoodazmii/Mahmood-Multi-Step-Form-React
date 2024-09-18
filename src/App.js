import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import Confirmation from "./components/Confirmation";
import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
} from "@mui/material";

const steps = ["Personal Information", "Address Information", "Confirmation"];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load saved data from localStorage on component mount
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    // Save form data to localStorage on formData change
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    let currentErrors = {};
    if (activeStep === 0) {
      if (!formData.name) currentErrors.name = "Name is required";
      if (!formData.email) currentErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        currentErrors.email = "Email is invalid";
      if (!formData.phone) currentErrors.phone = "Phone is required";
    } else if (activeStep === 1) {
      if (!formData.address1)
        currentErrors.address1 = "Address Line 1 is required";
      if (!formData.city) currentErrors.city = "City is required";
      if (!formData.state) currentErrors.state = "State is required";
      if (!formData.zip) currentErrors.zip = "Zip Code is required";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    localStorage.removeItem("formData");
    setActiveStep(0);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        {activeStep === 0 && (
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
        {activeStep === 1 && (
          <AddressInfo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
        {activeStep === 2 && <Confirmation formData={formData} />}
      </Box>
      <Box sx={{ mt: 4 }}>
        {activeStep < steps.length - 1 && (
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default App;
