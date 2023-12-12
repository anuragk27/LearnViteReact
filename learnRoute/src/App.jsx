import Navbar from "./components/Navbar"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import {About} from "./components/About"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<h3>Error 404</h3>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
