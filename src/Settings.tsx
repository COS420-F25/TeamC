import React, {useState} from 'react';
//This should create a visual popup state that allows the user to choose what their settings preference will be

//define the settings object to be used
interface userSettings{
    theme: 'light' | 'dark';
    pushNotifications: boolean
    fontSize: number
    fonts: String
}
