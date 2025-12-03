import logo from './logo.svg';
import './App.css';
import {auth} from "./firebase-config"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import SettingsDialog from "./Settings/SettingsDialog"
import { themeSet } from './themeSet';


function App() {
  const [signInWithGoogle, user, /*loading,error*/] = useSignInWithGoogle(auth);
  const SignOutFunction = () =>{signOut(auth);};
  const [showQuestions, setShowQuestions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
  
    theme: 'light',
    pushNotif: false,
    darkMode: false,
    fontSize: 16,
    fonts: 'Comic Sans MS'
  });

  // Helper function to get font family style
  const getFontFamily = () => {
    return settings.fonts ? `"${settings.fonts}"` : '"Comic Sans MS"';
  };

  // Apply font globally to buttons and questions - persists even when dialog is closed
  useEffect(() => {
    const fontFamily = settings.fonts || 'Comic Sans MS';
    const styleId = 'app-global-font-style';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    // Update the style with the current font value from settings
    styleElement.textContent = `
      button, 
      .App button,
      h1, h2, h3, h4, h5, h6,
      .App h1, .App h2, .App h3, .App h4, .App h5, .App h6,
      main, .App main,
      [class*="question"],
      [id*="question"] {
        font-family: "${fontFamily}" !important;
      }
    `;
  }, [settings.fonts]);

  if (user) {
    

    if (showQuestions){
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
              onClick={() => setShowQuestions(false)}
              style={{ 
                fontFamily: 'inherit',
                backgroundColor: settings.darkMode ? "black" : "inherit",
                color: settings.darkMode ? "white" : "inherit",
                border: settings.darkMode ? "1px solid white" : "1px solid black"
              }}
            >Back</button>
          </header>
          <main style={{
            backgroundColor: settings.darkMode ? "black" : "#f1f1f1", 
            color: settings.darkMode ? "white" : "inherit",
            padding: "75px",
            fontFamily: getFontFamily(),
          }}>
            <h1>Questions</h1>
            <div>
              
            </div>
          </main>

          <div>

          </div>
          </div>
        )}
    return (
      <themeSet.Provider value={{ darkMode: settings.darkMode, setDarkMode: (value) => {
  setSettings(prev => ({ ...prev, darkMode: value }));
}}}>
  
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
        <header style ={{
          backgroundColor: settings.darkMode ? "black" : "#666A6D", 
          color: settings.darkMode ? "white" : "inherit",
          display: "flex",
          alignItems: "center", 
          padding: "15px",
          fontFamily: getFontFamily(),
        }}>
          <div style={{flex: "1",textAlign: "left"}}>
          <button 
            onClick={SignOutFunction}
            style={{ 
              fontFamily: 'inherit',
              backgroundColor: settings.darkMode ? "black" : "inherit",
              color: settings.darkMode ? "white" : "inherit",
              border: settings.darkMode ? "1px solid white" : "1px solid black"
            }}
          >Sign out</button>
          </div>

          <div style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999
          }}>
  
            <SettingsDialog
          isOpen={showSettings}
          defaultValue={settings}
          onClose={() => setShowSettings(false)}
          onConfirm={(newSettings) => {
            setShowSettings(false); 
            setSettings(newSettings);
            console.log('Settings updated:', newSettings); // Debug: verify font is being updated
          }}
          />
          </div>
          
          <div style = {{flex: "2",textAlign: "center"}}>
          <button 
            onClick={()=>setShowQuestions(true)}
            style={{ 
              fontFamily: 'inherit',
              backgroundColor: settings.darkMode ? "black" : "inherit",
              color: settings.darkMode ? "white" : "inherit",
              border: settings.darkMode ? "1px solid white" : "1px solid black"
            }}
          >View Questions</button>
          </div>

          <div style = {{flex: "2",textAlign: "center"}}>
          <button 
            onClick={()=>setShowSettings(true)}
            style={{ 
              fontFamily: 'inherit',
              backgroundColor: settings.darkMode ? "black" : "inherit",
              color: settings.darkMode ? "white" : "inherit",
              border: settings.darkMode ? "1px solid white" : "1px solid black"
            }}
          >Settings</button>
          </div>

          <div style = {{flex: "1",}}>
          </div>

        </header>
        
        
      </div>
          </themeSet.Provider>
    )
  }

  return (
    <themeSet.Provider value={{ darkMode: settings.darkMode, setDarkMode: (value) => {
  setSettings(prev => ({ ...prev, darkMode: value }));
}}}>

    <div 
      className="App"
      style={{
        fontFamily: getFontFamily(),
        fontSize: settings.fontSize + "px",
        backgroundColor: settings.darkMode ? "#121212" : "white",
        color: settings.darkMode ? "white" : "black",
        minHeight: "100vh"
      }}
    >
          <h1>
            {" "}
            <span style={{color: settings.darkMode ? "white" : "blue"}}>
              Nudge App
              <div> 
                <button 
                  onClick={()=>signInWithGoogle()}
                  style={{ 
                    fontFamily: 'inherit',
                    backgroundColor: settings.darkMode ? "black" : "inherit",
                    color: settings.darkMode ? "white" : "inherit",
                    border: settings.darkMode ? "1px solid white" : "1px solid black"
                  }}
                >Sign In</button>
              </div>
              </span>
            </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: settings.darkMode ? "#61dafb" : "#61dafb" }}
          >
          Learn React
        </a>
    </div>
          </themeSet.Provider>
  );
  
  }
export default App;
