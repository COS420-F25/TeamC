import React,{ useState} from "react";

export function Flags(){
    const [showFlags, setShowFlags] = useState(false);
    return (
      <div className='App'>
        <header style={{ backgroundColor: "#666A6D", padding: "15px" }}>
          <button onClick={() => setShowFlags(false)}>Back</button>
        </header>
        <main style={{ backgroundColor: "#f1f1f1", padding: "75px" }}>
          <h1>Flags</h1>
          <div>
          </div>
          <div style = {{flex: "1",}}>
          </div>
        
        <div>
          <h2>flagged posts</h2>
        </div>
        <div className="parent">
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        </div>
       
        <h2>flagged users</h2>
        <div className="parent">
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        <button className='round-1'>&#128100;</button>
        </div>
        <hr></hr>
        </main>
      </div>
    );
}


