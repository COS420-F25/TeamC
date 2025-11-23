import React,{useState} from "react";
import {auth} from "../firebase-config"
import { signOut } from "firebase/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import {collection} from "firebase/firestore";
import {db} from "../firebase-config"


export function Groups({setShowQuestions, setShowFlags}){
  const SignOutFunction = () =>{signOut(auth);};
  const [priv] = useCollection(collection(db, 'admin'));
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

      </div>

    );

}
