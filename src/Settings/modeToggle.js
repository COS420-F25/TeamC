import React from "react";


export function ModeToggle({value, onChange}){
    //has lightmode set to true as default
    const pageStyle = {
        backgroundColor: value ? "black" : "white",
        color: value  ? "white" : "black",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "10px"
    };

    

    return(
        <div style = {pageStyle}
            >
            
            <label>
            Toggle Dark Mode
            <input
            type="checkbox"
            checked={value}
            onChange={(event) => onChange(event.target.checked)}
            style = {{marginLeft: "10px"}}
                />
            <span style={{ marginLeft: "10px" }}>
                {value ? "Dark Mode" : "Light Mode"}
            </span>
            </label>
            </div>
    );
}