import { useState } from "react";

export function ModeToggle(){
    const [mode, setMode] = useState<Boolean>(false);
    
    const curMode = {
        backgroundColor: mode ? "black" : "white",
        color: mode ? "white" : "black",
        minHeight: "100vh",
        padding: "20px"
    };

    

    return(
        <div style = {curMode}
            >
            <h3>Toggle Light/Dark mode</h3>
            
            <div className = "checkbox"
            type="checkbox"
            role="checkbox"
            checked={mode}
            onChange={(event) => {
                setMode(event.target.checked);
            }}
            />
            <span style={{ marginLeft: "10px" }}>
                {mode ? "Dark Mode" : "Light Mode"}
            </span>
            </div>
    );
}