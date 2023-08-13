import { useEffect, useState } from "react";
import Axios from "axios";


function App() {

  // fetch("https://catfact.ninja/fact").then((res) => res.json()).then(
  //   (data) => {
  //     console.log(data);
  //   }
  // );
  
  // we want to run this only once only when the component mounts
  const [catFact, setCatFact]  = useState("");

  const fetchCatFact = () =>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  }

  useEffect(()=>
    fetchCatFact(), 
    []);



  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>

  );
}

export default App;
