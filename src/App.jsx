import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Gallery from './pages/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="overflow-y-scroll h-screen scrollbar-hide">
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
