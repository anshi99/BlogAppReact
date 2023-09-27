//import logo from './logo.svg';
import './App.css';
//import Navbar from './Components/Navbar';
import AddBlog from './Components/AddBlog';
import Dashboard from './Components/Dashboard';
import EditBlog from './Components/EditBlog';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/addpost" element={<AddBlog/>} />
        <Route path="/editpost" element={<EditBlog/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
