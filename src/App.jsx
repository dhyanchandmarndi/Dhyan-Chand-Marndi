import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
