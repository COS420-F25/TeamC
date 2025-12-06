import React,{ useState} from "react";
import { Groups } from "./Groups";

export function Flags({setCurrentView}){
    return (
      <div className='App'>
        <header style={{ backgroundColor: "#666A6D", padding: "15px" }}>
          <button onClick={() => setCurrentView("groups")}>Back</button>
        </header>
        <main style={{ backgroundColor: "#f1f1f1", padding: "75px" }}>
          <h1>Flags</h1>
          <div>
          </div>
        </main>
      </div>
    );
}


