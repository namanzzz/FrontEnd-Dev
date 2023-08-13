import { useState } from "react";

export const ChangeProfile=(props)=>{
    const [newUserName, setNewUsername] = useState("");
    return (<div> 
                
                <input onChange={(event)=>{setNewUsername(event.target.value)}}/> 
                <button onClick={()=>{props.setUserName(newUserName)}}>Change Username</button>
           </div>
    );
}