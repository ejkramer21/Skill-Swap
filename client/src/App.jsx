import './App.css';
//Asa added below import react 
import React, { useState} from "react";
import Profile from "./components/jsx/Profile"
import Test from "./components/jsx/Test"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/jsx/NavBar';
import Search from './components/jsx/Search';
import Skills from './components/jsx/Skills';
import Registration from './components/jsx/Registration';
import Leave from './components/jsx/Leave';
import Login from './components/jsx/Login';
function App() {
  //Asa added below const

  const[currentForm,setCurrentForm] = useState('Login');

  return (
    <div className="App">
    {/* currentForm == login ? <Login/>: <Register/> */}
      <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Search/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/signout" element={<Leave/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
    </div>
  );
}


export default App;
