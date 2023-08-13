import { useEffect, useState, createContext} from "react";
import Axios from "axios";
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";


export const AppContext = createContext();



function App() {
  
  const [userName, setUserName] = useState("Naman")

  return (
    <div className="App">

      {/* <AppContext.Provider value={{userName, setUserName}}> */}
      <Router>

        <Navbar/>

        <Routes>
            <Route path="/" element={<Home username={userName}/>} />
            <Route path="/profile" element={<Profile username={userName} setUserName={setUserName}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </Router>


      {/* </AppContext.Provider> */}
    </div>

  );
}

export default App;
