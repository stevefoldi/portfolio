import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
//import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App
