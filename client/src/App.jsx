import './App.css';
import Profile from "./components/jsx/Profile"
import Test from "./components/jsx/Test"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/jsx/NavBar';
import Search from './components/jsx/Search';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Test/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
    </div>
  );
}


export default App;
