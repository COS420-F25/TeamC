import logo from './logo.svg';
import './App.css';
import {auth} from "./firebase-config"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import SettingsDialog from "./Footer/Settings/SettingsDialog"
import {Footer} from './/Footer.css'


function App() {
  const [signInWithGoogle, user, loading,error] = useSignInWithGoogle(auth);
  const SignOutFunction = () =>{signOut(auth);};
  const [showQuestions, setShowQuestions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    theme: 'light',
    pushNotif: false,
    fontSize: 16,
    fonts: 'Comic Sans'
  });

  if (user) {

    if (showQuestions){
      return(
      <div className='App'>
        <header style={{ backgroundColor: "#666A6D", padding: "15px" }}>
            <button onClick={() => setShowQuestions(false)}>Back</button>
          </header>
          <main style={{backgroundColor: "#f1f1f1", padding: "75px" }}>
            <h1>Questions</h1>
            <div>
              
            </div>
          </main>

          <footer style ={{backgroundColor: "#ddd",position: 'fixed',bottom: 5,display: 'flex',
          justifyContent: 'center',alignItems: "center",width: '100%',
        
        }}>
          <input type='text' placeholder='...?'>
          </input>
          <button> Send </button>
          </footer>

          <footer>
            <SettingsDialog
          isOpen={showSettings}
          defaultValue={settings}
          onClose={() => setShowSettings(false)}
          onConfirm={(newSettings) => {setShowSettings(false); setSettings(newSettings)}}
        />
          </footer>

      </div>
    )}
    return (
      <div className='App'>
        <header style ={{backgroundColor: "#666A6D", display: "flex",
        alignItems: "center", padding: "15px",
        }}>
          <div style={{flex: "1",textAlign: "left"}}>
          <button onClick={SignOutFunction}>Sign out</button>
          </div>

          
          <div style = {{flex: "2",textAlign: "center"}}>
          <button onClick={()=>setShowQuestions(true)}>View Questions</button>
          </div>

          <div style = {{flex: "2",textAlign: "center"}}>
          <button onClick={()=>setShowSettings(true)}>Settings</button>
          </div>

          <div style = {{flex: "1",}}>
          </div>

        </header>
        
        
      </div>
    )
  }

  return (
    <div className="App">
          <h1>
            {" "}
            <span style={{color: "blue"}}>
              Nudge App
              <div> 
                <button onClick={()=>signInWithGoogle()} >Sign In</button>
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
        >
          Learn React
        </a>
    </div>
  );
  
  return(
      <div className = "App" >
        <Footer>

        </Footer>
    
    </div>
    );
  }
export default App;
