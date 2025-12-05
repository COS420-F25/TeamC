import { Button, Checkbox, Dialog, DialogActions, DialogTitle, DialogContent, Typography, FormControlLabel } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import { ModeToggle } from "./modeToggle";
import { FontSelector } from "./FontSelector";

export default function SettingsDialog({isOpen, defaultValue, onClose, onConfirm }) {
    
  const [userSetting, setUserSetting] = useState(defaultValue)
  
  // Get the current font family
  const getFontFamily = () => {
    return userSetting?.fonts ? `"${userSetting.fonts}"` : '"Comic Sans MS"';
  };

  // Sync state when defaultValue changes (e.g., when dialog reopens)
  useEffect(() => {
    setUserSetting(defaultValue);
  }, [defaultValue]);

  const handlePushNotificationChange = (_, checked) => {
    setUserSetting(prevUserSetting => ({ ...prevUserSetting, pushNotif: checked }));
  };

  const handleOnConfirm = () => {
    onConfirm(userSetting)
  }

  const handleOnClose = () => {
    onClose()
    setUserSetting(defaultValue)
  }

  const handleFontChange = (fontValue) => {
    setUserSetting(prev => ({...prev, fonts: fontValue}));
  };

  const isDarkMode = userSetting?.darkMode || false;

  return(

      <React.Fragment>
      <Dialog 
        open={isOpen}
        sx={{
          '& .MuiDialog-container': {
            fontFamily: getFontFamily(),
          },
          '& .MuiDialog-paper': {
            backgroundColor: isDarkMode ? 'black' : 'white',
            color: isDarkMode ? 'white' : 'black',
          },
          '& .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root, & .MuiTypography-root, & .MuiButton-root, & .MuiFormControlLabel-root': {
            fontFamily: 'inherit !important',
            color: isDarkMode ? 'white !important' : 'inherit',
          },
          '& .MuiButton-root': {
            backgroundColor: isDarkMode ? 'black' : 'inherit',
            color: isDarkMode ? 'white !important' : 'inherit',
            border: isDarkMode ? '1px solid white' : '1px solid gray',
          },
          '& .MuiFormControlLabel-label': {
            color: isDarkMode ? 'white !important' : 'inherit',
          },
          '& .MuiCheckbox-root': {
            color: isDarkMode ? 'white !important' : 'inherit',
          },
        }}
      >
        <DialogTitle style={{ color: isDarkMode ? 'white' : 'inherit' }}>Settings</DialogTitle>
        <DialogContent>
          <Typography style={{ color: isDarkMode ? 'white' : 'inherit' }}>Change the setting for the user</Typography>
          <FormControlLabel
            label="Push Notification"
            control={
              <Checkbox
                checked={userSetting.pushNotif}
                onChange={handlePushNotificationChange}
                sx={{
                  color: isDarkMode ? 'white !important' : 'inherit',
                  '&.Mui-checked': {
                    color: isDarkMode ? 'white !important' : 'inherit',
                  }
                }}
              />
            }
          />
        {/*put in the darkmode toggle*/}
        <Typography style={{marginTop: "15px", color: isDarkMode ? 'white' : 'inherit'}}>Theme</Typography>

        <ModeToggle
        value = {userSetting.darkMode}
        onChange = {( checked)=> 
          setUserSetting(prev => ({...prev, darkMode: checked}))
        }
        />

        <FontSelector
          value={userSetting.fonts}
          onChange={handleFontChange}
          isDarkMode={isDarkMode}
        />

        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleOnClose}
            sx={{
              backgroundColor: isDarkMode ? 'black' : 'inherit',
              color: isDarkMode ? 'white !important' : 'inherit',
              border: isDarkMode ? '1px solid white' : '1px solid gray',
              '&:hover': {
                backgroundColor: isDarkMode ? '#333' : 'inherit',
              }
            }}
          >Discard</Button>
          <Button 
            onClick={handleOnConfirm} 
            autoFocus
            sx={{
              backgroundColor: isDarkMode ? 'black' : 'inherit',
              color: isDarkMode ? 'white !important' : 'inherit',
              border: isDarkMode ? '1px solid white' : '1px solid gray',
              '&:hover': {
                backgroundColor: isDarkMode ? '#333' : 'inherit',
              }
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}