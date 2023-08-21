// import {useState} from 'react'
import { useToggle } from './useToggle';
import { Person } from './components/person';

function App() {
  
  return (
    <div className="App">


     <Person
     name={21}
     email="Naman@gmail.com"
     age={21}
     isMarried={false}
     friends={["se", "hiu", "ansh", "me"]}
     />
     
      
    </div>

  );
}

export default App;

