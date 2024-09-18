import React from "react";
import { TextField, Box } from "@mui/material";

const PersonalInfo = ({ formData, setFormData, errors }) => {
  return (
    <Box>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Phone"
        fullWidth
        margin="normal"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        error={!!errors.phone}
        helperText={errors.phone}
      />
    </Box>
  );
};

export default PersonalInfo;
