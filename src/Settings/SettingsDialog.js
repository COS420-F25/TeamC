import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

import { useState, useEffect } from "react";
import React from "react";
import { ModeToggle } from "./modeToggle";
import { FontSelector } from "./FontSelector";

export default function SettingsDialog({
  isOpen,
  defaultValue,
  onClose,
  onConfirm
}) {
  // ONE unified state object
  const [userSetting, setUserSetting] = useState(defaultValue);

  // Sync whenever defaultValue changes
  useEffect(() => {
    setUserSetting(defaultValue);
  }, [defaultValue]);

  const isDarkMode = userSetting.darkMode === true;

  // Get font family reliably
  const getFontFamily = () => {
    return userSetting?.fonts
      ? `"${userSetting.fonts}"`
      : '"Comic Sans MS"';
  };

  const handlePushNotificationChange = (_, checked) => {
    setUserSetting((prev) => ({
      ...prev,
      pushNotif: checked
    }));
  };

  const handleFontFamilyChange = (fontValue) => {
    setUserSetting((prev) => ({
      ...prev,
      fonts: fontValue
    }));
  };

  const handleFontSizeChange = (e) => {
    setUserSetting((prev) => ({
      ...prev,
      fontSizeLevel: Number(e.target.value)
    }));
  };

  const handleOnConfirm = () => {
    onConfirm(userSetting);
  };

  const handleOnClose = () => {
    setUserSetting(defaultValue);
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        sx={{
          "& .MuiDialog-container": {
            fontFamily: getFontFamily()
          },
          "& .MuiDialog-paper": {
            backgroundColor: isDarkMode ? "black" : "white",
            color: isDarkMode ? "white" : "black"
          },
          "& .MuiTypography-root": {
            color: isDarkMode ? "white" : "inherit"
          },
          "& .MuiFormControlLabel-root": {
            color: isDarkMode ? "white" : "inherit"
          }
        }}
      >
        <DialogTitle>Settings</DialogTitle>

        <DialogContent>
          <Typography>
            Change the settings for the user
          </Typography>

          {/* Push Notifications */}
          <FormControlLabel
            label="Push Notification"
            control={
              <Checkbox
                checked={userSetting.pushNotif}
                onChange={handlePushNotificationChange}
              />
            }
          />

          {/* Dark Mode */}
          <Typography style={{ marginTop: "15px" }}>
            Theme
          </Typography>

          <ModeToggle
            value={isDarkMode}
            onChange={(checked) =>
              setUserSetting((prev) => ({
                ...prev,
                darkMode: checked
              }))
            }
          />

          {/* Font Family */}
          <FontSelector
            value={userSetting.fonts}
            onChange={handleFontFamilyChange}
            isDarkMode={isDarkMode}
          />

          {/* Font Size Dropdown */}
          <FormControl fullWidth style={{ marginTop: "15px" }}>
            <InputLabel>Font Size</InputLabel>
            <Select
              value={userSetting.fontSizeLevel}
              label="Font Size"
              onChange={handleFontSizeChange}
            >
              <MenuItem value={0}>+0 (Default)</MenuItem>
              <MenuItem value={1}>+3</MenuItem>
              <MenuItem value={2}>+6</MenuItem>
              <MenuItem value={3}>+9</MenuItem>
              <MenuItem value={4}>+12</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleOnClose}>Discard</Button>
          <Button onClick={handleOnConfirm} autoFocus>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
