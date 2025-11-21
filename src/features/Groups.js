import React,{useState} from "react";
import {auth} from "../firebase-config"
import { signOut } from "firebase/auth";

export function Groups({setShowQuestions}){
  const SignOutFunction = () =>{signOut(auth);};
    return(
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

      </div>

    );

}
