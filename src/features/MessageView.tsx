import React,{ JSX, useState } from "react";
import {collection, DocumentData} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";
import {auth, db} from "../firebase-config.tsx";
import {Message} from "../Message.tsx";

export function MessageView(): JSX.Element {    
    
    //Chnage TestGroup to depend on the state that is imported from App.tsx
    const [value,loading,error] = useCollection(collection(db,"TestGroup"));
    return(
        //Create a divison where the Value of the database at the current collection target is mapped and then mapped again to show each Message object as a string of User":" Text " sent at " Time
        //if no value is found(value==Null) then show loading...

        //Time is working even if it the number type is saing it shouldnt, look into 
        <div>
            {(value)? <div>
                {value.docs.map((obj) =>(
                    <div>
                        {obj.data().Messages.map((msg:Message) =>
                            (<div> 
                                
                            {msg.User}: {msg.Text}   sent at {msg.Time}
                            </div>
                            ))}
                    </div>
                ))      
                }
            
            </div> : <div>Loading...</div>}
        </div>


)}