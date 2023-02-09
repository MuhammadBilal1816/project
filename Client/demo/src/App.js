
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import Navbar from './Components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
     <Route path="/blog" element={<Blog/>}/>
    </Routes>
    </Router>
  );
}

export default App;
