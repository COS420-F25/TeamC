import React, {useState} from "react";
import { ModeToggle } from './modeToggle';
//This should create a visual popup state that allows the user to choose what their settings preference will be

//define the settings object to be used
export interface Settings{
        theme: 'light' | 'dark';
        pushNotif: boolean
        fontSize: number
        fonts: String
}
//make the settings popout button

const ToggleSettings = () => {
        const [displaySettings, setDisplaySettings] = useState(false);
        
        return(

        <div className='App'>
        <header style={{ backgroundColor: "#666A6D", padding: "15px" }}>
            <button onClick={() => setDisplaySettings(false)}>Back</button>
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

      </div>
);
}


