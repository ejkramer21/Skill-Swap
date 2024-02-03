import './App.css';
import Profile from "./components/jsx/Profile"
import Test from "./components/jsx/Test"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/jsx/NavBar';
import Search from './components/jsx/Search';
import Skills from './components/jsx/Skills';
import Registration from './components/jsx/Registration';
import Leave from './components/jsx/Leave';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Search/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/signout" element={<Leave/>} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
    </div>
  );
}


export default App;
