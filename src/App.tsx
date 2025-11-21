import NudgeLogo1 from './features/NudgeLogo1.png';
import './App.css';
import {auth} from "./firebase-config"
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import {QuestionsPage} from './features/QuestionsPage.tsx';
import { Groups } from './features/Groups';

function App(): JSX.Element {
  const [signInWithGoogle, user, loading,error] = useSignInWithGoogle(auth);
  const SignOutFunction = () =>{signOut(auth);};
  const [showQuestions, setShowQuestions] = useState<boolean>(false);
  if (user) {

    if (showQuestions){
      return(
        
      <div className='App'>
        
        <QuestionsPage showQuestions ={showQuestions} setShowQuestions={setShowQuestions}></QuestionsPage>
        <hr></hr>
      </div>
    )}
    return (
      <div className='App'>
        <Groups setShowQuestions={setShowQuestions}></Groups>

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
        <img src={NudgeLogo1} className="App-logo" alt="nudge-logo" />
        <p>
          Edit <code>src/App.tsx/code> and save to reload.
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
}

export default App;
