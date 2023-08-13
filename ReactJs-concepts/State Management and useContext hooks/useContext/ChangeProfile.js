import { useState } from "react";
import { useContext } from "react"
import { AppContext } from '../App'

export const ChangeProfile=()=>{
    const {setUserName} = useContext(AppContext);
    const [newUserName, setNewUsername] = useState("");
    return (<div> 
                
                <input onChange={(event)=>{setNewUsername(event.target.value)}}/> 
                <button onClick={()=>{setUserName(newUserName)}}>Change Username</button>
           </div>
    );
}