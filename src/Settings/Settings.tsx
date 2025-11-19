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
//Make the mode toggle
ModeToggle()