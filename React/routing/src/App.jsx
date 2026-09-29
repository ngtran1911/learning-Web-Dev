import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css'
//pages
import Home from './components/Home';
import About from './components/About';

function App() {
  return(
    <div>
      <header>
        <nav>
          <h1>HEllo router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink> 
          
        </nav>
      
      </header>


      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>} />
      </Routes>
    </div>
    
  ); 
}

export default App
