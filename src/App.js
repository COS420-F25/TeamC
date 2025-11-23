import NudgeLogo1 from './features/NudgeLogo1.png';
import './App.css';
import {auth, db} from "./firebase-config"
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import {collection} from "firebase/firestore";
import { QuestionsPage } from './features/QuestionsPage';
import { Groups } from './features/Groups';
import { Flags } from './features/Flags';

function App() {
  const [signInWithGoogle, user, loading,error] = useSignInWithGoogle(auth);
  const SignOutFunction = () =>{signOut(auth);};
  const [showQuestions, setShowQuestions] = useState(false);
  const [showFlags, setShowFlags] = useState(false);
  const [showGroups, setShowGroups] = useState(true);


  if (user) {

    if (showQuestions){
      return(
        
      <div className='App'>
        
        <QuestionsPage></QuestionsPage>
        <hr></hr>
      </div>
      );
    }
    if (showFlags){
      return(
        <div className='App'>
          <Flags></Flags>
          <hr></hr>
        </div>
      );
    }
    if (showGroups){
      return(
      <div className='App'>
        <Groups setShowQuestions={setShowQuestions} setShowFlags={setShowFlags}></Groups>
      </div>
    )
  }
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
        <img src={NudgeLogo1} className="App-logo" alt="nudge-logo" />
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
  )
}

export default App;
