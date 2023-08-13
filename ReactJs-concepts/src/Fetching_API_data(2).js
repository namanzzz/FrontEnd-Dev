import { useEffect, useState } from "react";
import Axios from "axios";


function App() {

  const [name, setName] = useState("Naman");
  const [PredictedAge, setPredictedAge] = useState(null);
  const FetchData= ()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{console.log(res.data);
    setPredictedAge(res.data);
  });
  }

  return (
    <div className="App">
      <input type="text" placeholder="Ex Naman..." onChange={(event)=>{
        setName(event.target.value);
      }} />
      <button onClick={FetchData}>Predict Age</button>

      <h1>Name: {PredictedAge?.name} </h1>
      <h1>Predicted Age: {PredictedAge?.age} </h1>
      <h1>Count: {PredictedAge?.count} </h1>

    </div>

  );
}

export default App;
