import NudgeLogo1 from './features/NudgeLogo1.png';
import './App.css';
import {auth, db} from "./firebase-config"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import {collection} from "firebase/firestore";
import { QuestionsPage } from './features/QuestionsPage';
import { Groups } from './features/Groups';
import { Flags } from './features/Flags';
import { themeSet } from './themeSet';
import SettingsDialog from "./Settings/SettingsDialog"



function App() {
  const [signInWithGoogle, user, /*loading,error*/] = useSignInWithGoogle(auth);
  const SignOutFunction = () =>{signOut(auth);};
  const [showQuestions, setShowQuestions] = useState(false);
  const [showFlags, setShowFlags] = useState(false);
  const [showGroups, setShowGroups] = useState(true);
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
          </div>
        )}


    if (showFlags){
      return (
        {Flags}
        )}
    if (showGroups){
      return(
      <div className='App'>
        <Groups setShowQuestions={setShowQuestions} setShowFlags={setShowFlags}></Groups>
      </div>
    )
  }
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
          
          {/* <button 
            onClick={()=>setShowSettings(true)}
            style={{ 
              fontFamily: 'inherit',
              backgroundColor: settings.darkMode ? "black" : "inherit",
              color: settings.darkMode ? "white" : "inherit",
              border: settings.darkMode ? "1px solid white" : "1px solid black"
            }}
          >Settings</button>*/}
          </div>

          <div style = {{flex: "1",}}>
          </div> 

        </header>
        
        
      {/*this section was written by an AI to fix our broken code*/}
           </div>
    </themeSet.Provider>
  );
}

// If user is NOT logged in, show login screen
return (
  <themeSet.Provider
    value={{
      darkMode: settings.darkMode,
      setDarkMode: (value) =>
        setSettings((prev) => ({ ...prev, darkMode: value })),
    }}
  >
    <div
      className="App"
      style={{
        fontFamily: getFontFamily(),
        fontSize: settings.fontSize + "px",
        backgroundColor: settings.darkMode ? "#121212" : "white",
        color: settings.darkMode ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <h1>
        <span style={{ color: settings.darkMode ? "white" : "blue" }}>
          Nudge App
        </span>

        <div>
          <button
            onClick={() => signInWithGoogle()}
            style={{
              fontFamily: "inherit",
              backgroundColor: settings.darkMode ? "black" : "inherit",
              color: settings.darkMode ? "white" : "inherit",
              border: settings.darkMode
                ? "1px solid white"
                : "1px solid black",
            }}
          >
            Sign In
          </button>
        </div>
      </h1>

      <img src={NudgeLogo1} className="App-logo" alt="nudge-logo" />
      <p>Edit src/App.js and save to reload.</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#61dafb" }}
      >
        Learn React
      </a>
    </div>
  </themeSet.Provider>
);
}

export default App;
