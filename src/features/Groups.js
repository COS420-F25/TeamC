import React,{useState} from "react";
import {auth} from "../firebase-config"
import { signOut } from "firebase/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import {collection} from "firebase/firestore";
import {db} from "../firebase-config"
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
          onClick={()=>setShowSettings(true)}
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


export function Groups({setShowQuestions, setShowFlags}) {
  const [showSettings, setShowSettings] = useState(false);
  const SignOutFunction = () =>{signOut(auth);};
  const tempAd = true;
    return(
      
        <div className='App'>
        <header style ={{backgroundColor: "#666A6D", display: "flex",
        alignItems: "center", padding: "15px",
        }}>
          <div style={{flex: "1",textAlign: "left"}}>
          <button onClick={SignOutFunction}>Sign out</button>
          </div>

          
          <div style = {{flex: "13",textAlign: "center"}}>
          <button onClick={()=>setShowQuestions(true)}>View Questions</button>
          </div>
          {tempAd && (
            <div style = {{flex: "1",textAlign: "justify"}}>
            <button onClick={()=>setShowFlags(true)}>View Flags</button>
            </div>
          )}
  

          <div style = {{flex: "1",}}>
          </div>
        </header>
        <div>
          <h2>Recent Messages</h2>
        </div>
        <div className="parent">
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        </div>
       
        <h2>Recent Question Boards</h2>
        <div className="parent">
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        </div>
        <hr></hr>

          <div>
          <SettingsDialog
           isOpen={showSettings}
           defaultValue={{
            pushNotif: false,
            darkMode: false,
            fonts: "Comic Sans MS"
           }}
           onClose={() => setShowSettings(false)}
           onConfirm={(updatedSettings) => {
            console.log("Settings applied: ", updatedSettings);
            setShowSettings(false);
           }}>
  </SettingsDialog>
            <AppFooter setShowSettings={setShowSettings}></AppFooter>
           </div>
      </div>

    );

}
