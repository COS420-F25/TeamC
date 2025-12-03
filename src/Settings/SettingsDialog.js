import { Button, Checkbox, Dialog, DialogActions, DialogTitle, DialogContent, Typography, FormControlLabel } from "@mui/material";
import { useState } from "react";
import React from "react";
import { ModeToggle } from "./modeToggle";

export default function SettingsDialog({isOpen, defaultValue, onClose, onConfirm }) {
    
  const [userSetting, setUserSetting] = useState(defaultValue)

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
  const handleDarkModeChange = (checked) => {
    setUserSetting(prev => ({...prev, darkMode: checked}));
  };

  return(

      <React.Fragment>
      <Dialog open={isOpen}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <Typography>Change the setting for the user</Typography>
          <FormControlLabel
            label="Push Notification"
            control={
              <Checkbox
                checked={userSetting.pushNotif}
                onChange={handlePushNotificationChange}
              />
            }
          />
        {/*put in the darkmode toggle*/}
        <Typography style ={{marginTop: "15px"}}>Theme</Typography>

        <ModeToggle
        checked = {userSetting.darkMode}
        onChange = {(_, checked)=> 
          setUserSetting(prev => ({...prev, darkMode: checked}))
        }
        />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClose}>Discard</Button>
          <Button onClick={handleOnConfirm} autoFocus>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}