import React from "react";
import { Box, Typography } from "@mui/material";

const Confirmation = ({ formData }) => {
  return (
    <Box>
      <Typography variant="h6">Review Your Information</Typography>
      <Typography>Name: {formData.name}</Typography>
      <Typography>Email: {formData.email}</Typography>
      <Typography>Phone: {formData.phone}</Typography>
      <Typography>Address Line 1: {formData.address1}</Typography>
      <Typography>Address Line 2: {formData.address2}</Typography>
      <Typography>City: {formData.city}</Typography>
      <Typography>State: {formData.state}</Typography>
      <Typography>Zip Code: {formData.zip}</Typography>
    </Box>
  );
};

export default Confirmation;
