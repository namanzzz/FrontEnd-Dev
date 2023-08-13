import { useEffect, useState } from "react";
import Axios from "axios";


function App() {
  
  const [excuse, setExcuse] = useState("");
  const [excuseType, setexcuseType] = useState("")


  const FetchData=(excusetype)=>{
    setexcuseType(excusetype);
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}`).then((res)=>{
      console.log(res.data[0]);
      setExcuse(res.data[0].excuse);
    })
  }

  return (
    <div className="App">
    <h1>Genrate an Exucuse</h1>
      <button onClick={()=> FetchData("party")}>Party</button>
      <button onClick={()=> FetchData("family")}>Family</button>
      <button onClick={()=> FetchData("office")}>Office</button>

    <h3>Excuse: {excuse}</h3>
    </div>

  );
}

export default App;
