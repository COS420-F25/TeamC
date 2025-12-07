import React from "react";
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function fontSizeSelector({ value, onChange, isDarkMode }) {
  return (
    <>
      <Typography style={{ marginTop: "15px", color: isDarkMode ? 'white' : 'inherit' }}>
        Font Size Level
      </Typography>

      <FormControl fullWidth style={{ marginTop: "5px" }}>
        <InputLabel style={{ color: isDarkMode ? 'white' : 'inherit' }}>
          Select Size Level
        </InputLabel>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          label="Select FontSize"
          style={{ color: isDarkMode ? 'white' : 'inherit' }}
        >
          <MenuItem value={16}>Small (+3)</MenuItem>
          <MenuItem value={19}>Medium (+6)</MenuItem>
          <MenuItem value={22}>Large (+9)</MenuItem>
          <MenuItem value={25}>Extra Large (+12)</MenuItem>
          <MenuItem value={28}>Huge (+15)</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
