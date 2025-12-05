import React from "react";
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function FontSelector({ value, onChange, isDarkMode = false }) {

  const handleFontChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <Typography style={{ marginTop: "15px", color: isDarkMode ? 'white' : 'inherit' }}>
        Font style
      </Typography>
      <FormControl fullWidth style={{ marginTop: "10px", marginBottom: "10px" }}>
        <InputLabel 
          id="font-family-label" 
          style={{ color: isDarkMode ? 'white' : 'inherit' }}
        >
          Select Font
        </InputLabel>
        <Select
          labelId="font-family-label"
          id="font-family-select"
          value={value || 'Comic Sans MS'}
          label="Select Font"
          onChange={handleFontChange}
          sx={{
            color: isDarkMode ? 'white !important' : 'inherit',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isDarkMode ? 'white !important' : 'inherit',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isDarkMode ? 'white !important' : 'inherit',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: isDarkMode ? 'white !important' : 'inherit',
            },
          }}
        >
          <MenuItem 
            value="Comic Sans MS" 
            sx={{ 
              backgroundColor: isDarkMode ? 'black' : 'white',
              color: isDarkMode ? 'white' : 'inherit',
              '&:hover': {
                backgroundColor: isDarkMode ? '#333' : 'inherit',
              }
            }}
          >
            Comic Sans
          </MenuItem>
          <MenuItem 
            value="Times New Roman" 
            sx={{ 
              backgroundColor: isDarkMode ? 'black' : 'white',
              color: isDarkMode ? 'white' : 'inherit',
              '&:hover': {
                backgroundColor: isDarkMode ? '#333' : 'inherit',
              }
            }}
          >
            Times New Roman
          </MenuItem>
          <MenuItem 
            value="Arial" 
            sx={{ 
              backgroundColor: isDarkMode ? 'black' : 'white',
              color: isDarkMode ? 'white' : 'inherit',
              '&:hover': {
                backgroundColor: isDarkMode ? '#333' : 'inherit',
              }
            }}
          >
            Arial
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

