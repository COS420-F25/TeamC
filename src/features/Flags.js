import React,{ useState} from "react";
import SettingsDialog from "../Settings/SettingsDialog"



export function Flags(){
    const [showFlags, setShowFlags] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState({
      
        theme: 'light',
        pushNotif: false,
        darkMode: false,
        fontSize: 16,
        fonts: 'Comic Sans MS'
      });
    const getFontFamily = () => {
    return settings.fonts ? `"${settings.fonts}"` : '"Comic Sans MS"';
  };
    return (
      <div
    className="App"
    style={{
      /*this is where the settings are applied*/
      backgroundColor: settings.darkMode ? "#121212" : "white",
      color: settings.darkMode ? "white" : "black",
      minHeight: "100vh",
      fontSize: settings.fontSize + "px",
      fontFamily: getFontFamily()
      
    }}
  >
        <header style={{ 
          backgroundColor: settings.darkMode ? "black" : "#666A6D", 
          color: settings.darkMode ? "white" : "inherit",
          padding: "15px",
          fontFamily: getFontFamily(),
        }}>
            <button 
              onClick={() => setShowFlags(false)}
              style={{ 
                fontFamily: 'inherit',
                backgroundColor: settings.darkMode ? "black" : "inherit",
                color: settings.darkMode ? "white" : "inherit",
                border: settings.darkMode ? "1px solid white" : "1px solid black"
              }}
            >Back</button>
          </header>
          <main style={{
            backgroundColor: settings.darkMode ? "black" : "#ffffffff", 
            color: settings.darkMode ? "white" : "inherit",
            padding: "75px",
            fontFamily: getFontFamily(),
          }}>
 <div>
          <h2>Flagged posts</h2>
        </div>
        <div className="parent">
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        </div>
       
        <h2>flagged Users</h2>
        <div className="parent">
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        </div>
          </main>
          </div>
    );
}


