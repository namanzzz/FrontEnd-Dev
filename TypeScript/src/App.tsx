import React, {FC} from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

const App: FC = () => {
  
  return (
    <div className="App">
         <Person name="Naman" age={21} email="namansharma50962@gmail.com" hairColor={HairColor.Blonde}/>
    </div>
  );
}

export default App;
