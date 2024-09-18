import React from "react";
import { TextField, Box } from "@mui/material";

const AddressInfo = ({ formData, setFormData, errors }) => {
  return (
    <Box>
      <TextField
        label="Address Line 1"
        fullWidth
        margin="normal"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
        error={!!errors.address1}
        helperText={errors.address1}
      />
      <TextField
        label="Address Line 2"
        fullWidth
        margin="normal"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
      />
      <TextField
        label="City"
        fullWidth
        margin="normal"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        label="State"
        fullWidth
        margin="normal"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField
        label="Zip Code"
        fullWidth
        margin="normal"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        error={!!errors.zip}
        helperText={errors.zip}
      />
    </Box>
  );
};

export default AddressInfo;
