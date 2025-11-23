import React,{ useState} from "react";

export function Flags(){
    const [showFlags, setShowFlags] = useState(false);
    return(
        
        <div className='App'>
        <header style={{ backgroundColor: "#666A6D", padding: "15px" }}>
            <button onClick={() => setShowFlags(false)}>Back</button>
          </header>
          <main style={{backgroundColor: "#f1f1f1", padding: "75px" }}>
            <h1>Flags</h1>
            <div>
              
            </div>
          </main>
        
          </div>
        )
}


