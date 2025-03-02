import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>PRODUCT MANAGEMENT</h1>
    <Navbar/>
    <br></br>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add" element={<Add/>} ></Route>
    </Routes>
    </>
  )
}

export default App