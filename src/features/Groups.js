import React,{useState} from "react";
import {auth} from "../firebase-config"
import { signOut } from "firebase/auth";
import SettingsDialog from "../Settings/SettingsDialog"



function AppFooter({ setShowSettings }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px 20px",
        borderTop: "1px solid #ccc",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "inherit",
        zIndex: 10
      }}
    >
      <div>
        <button
          onClick={() => setShowSettings(true)}
          style={{
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export function Groups({ 
  setCurrentView, 
  settings,             
  onSettingsConfirm,
  setOtherUser     
}) {
  const [showSettings, setShowSettings] = useState(false);
  const SignOutFunction = () =>{signOut(auth);};
  const tempAd = true;
  const pageStyle = {
  backgroundColor: settings.darkMode ? "#000" : "#fff",
  color: settings.darkMode ? "#fff" : "#000",
  minHeight: "100vh",
  fontFamily: settings.fontFamily,
  fontSize: settings.fontSize,
};

  return (
  <div style={pageStyle}>
    <header style={{
      backgroundColor: "#666A6D",
      display: "flex",
      alignItems: "center",
      padding: "15px",
    }}>
      <div style={{ flex: "1", textAlign: "left" }}>
        <button onClick={SignOutFunction}>Sign out</button>
      </div>

      <div style={{ flex: "13", textAlign: "center" }}>
        <button onClick={() => setCurrentView("questions")}>View Questions</button>
      </div>

      {tempAd && (
        <div style={{ flex: "1", textAlign: "justify" }}>
          <button onClick={() => setCurrentView("flags")}>View Flags</button>
        </div>
      )}

      <div style={{ flex: "1" }}></div>
    </header>

    <div>
      <h2>Recent Messages</h2>
    </div>

    <div className="parent">
      <button className='round-1' onClick={() => {setCurrentView("Messages"); setOtherUser("OtherTestUser")}}>&#128100;</button>
      <button className='round-1' onClick={() => {setCurrentView("Messages"); setOtherUser("TestUser2")}}>&#128100;</button>
      <button className='round-1' onClick={() => {setCurrentView("Messages"); setOtherUser("NotaUser")}}>&#128100;</button>
    </div>

    <h2>Recent Question Boards</h2>

    <div className="parent">
      <button className='round-1'>&#128100;</button>
      <button className='round-1'>&#128100;</button>
      <button className='round-1'>&#128100;</button>
    </div>

    <hr />

    <SettingsDialog
      isOpen={showSettings}
      defaultValue={settings}
      onClose={() => setShowSettings(false)}
      onConfirm={(updatedSettings) => {
        onSettingsConfirm(updatedSettings);
        setShowSettings(false);
      }}
    />

    <AppFooter setShowSettings={setShowSettings} />
  </div>
);

}
