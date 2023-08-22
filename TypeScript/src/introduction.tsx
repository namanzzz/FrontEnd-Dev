import React from 'react';
import './App.css';

function App() {
  const name:string = "Naman"
  const age:number = 21
  const ismarried:boolean = false

  const getName = (name: string): number =>{
    if(name==="Naman")
    return 21;
    else return 0; 
  }

  return (
    <div className="App">
     {name}
     <h1>well {name} is {ismarried? "married": "not married"}, cuz well he is just {age}</h1>
    </div>
  );
}

export default App;
