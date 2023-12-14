import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import NavBar from './components/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="create" element={<Create/>}/>
      </Routes>



    </div>
  );
}

export default App
