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

    const labelStyle = {
        color: value ? "white" : "black"
    };

    const spanStyle = {
        marginLeft: "10px",
        color: value ? "white" : "black"
    };

    return(
        <div style = {pageStyle}>
            <label style={labelStyle}>
            Toggle Dark Mode
            <input
            type="checkbox"
            checked={value}
            onChange={(event) => onChange(event.target.checked)}
            style = {{marginLeft: "10px"}}
                />
            <span style={spanStyle}>
                {value ? "Dark Mode" : "Light Mode"}
            </span>
            </label>
            </div>
    );
}