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
import { MessageView } from './features/MessageView.tsx';
import { themeSet } from './themeSet';
import SettingsDialog from "./Settings/SettingsDialog"



function App() {
  const [signInWithGoogle, user, /*loading,error*/] = useSignInWithGoogle(auth);
  const SignOutFunction = () =>{signOut(auth);};
  const [currentView, setCurrentView] = useState("groups");
  const [showSettings, setShowSettings] = useState(false);
  const [otherUser, setOtherUser] = useState(null);
  const [settings, setSettings] = useState({
  
    theme: 'light',
    pushNotif: false,
    darkMode: false,
    fontSizeLevel: 0,
    fonts: 'Comic Sans MS'
  });
  const computedFontSize = 16 + settings.fontSizeLevel * 3;
  const handleSettingsConfirm = (updatedSettings) => {
  setSettings(updatedSettings);  // <- update global settings
  setShowSettings(false);        // <- close any SettingsDialog
};
  
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
    

    if (currentView === "questions"){
      return (
        <div
          className="App"
          style={{
            /*this is where the settings are applied*/
            backgroundColor: settings.darkMode ? "#121212" : "white",
            color: settings.darkMode ? "white" : "black",
            minHeight: "100vh",
            fontSize: computedFontSize + "px",
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
              onClick={() => setCurrentView("groups")}
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
          
            <div>
            <QuestionsPage
    settings={settings}
    setCurrentView={setCurrentView}
  />
            </div>
          </main>
          </div>
        )}


         if (currentView === "flags"){
      return(
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
              onClick={() => setCurrentView("groups")}
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
    if (currentView === "Messages"){
      return (
  <div
    className="App"
    style={{
      /*this is where the settings are applied*/
      backgroundColor: settings.darkMode ? "#121212" : "white",
      color: settings.darkMode ? "white" : "black",
      minHeight: "100vh",
      fontSize: computedFontSize + "px",
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
              onClick={() => setCurrentView("groups")}
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
            <MessageView setCurrentView={setCurrentView} otherUser={otherUser}></MessageView>
          </main>
          </div>
        )}
    if (currentView === "groups"){
      return(
      <div className='App'>
        <Groups
  setCurrentView={setCurrentView}
  settings={settings}                   
  onSettingsConfirm={handleSettingsConfirm}  
  setOtherUser={setOtherUser}
/>

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
            onClick={()=>setCurrentView("questions")}
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
