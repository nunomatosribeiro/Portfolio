import { useState } from 'react'
import './App.css'
import About from './components/about'
import Intro from './components/intro'
import NavBar from './components/NavBar'
import Skills from './components/skills'
import Projects from './components/projects'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Footer from './components/footer'
    
function App() {
 
  return (
    <div className='appPage'>    
    <NavBar  />
    
    <Intro />
    <section id='about'>
    <About  />
    </section>
    <section id='skills'>
    <Skills />
    </section>
    <section id='projects'>
    <Projects />
    </section>
    <section id='footer'>
    <Footer />
    </section>
    
    </div>
  )
}

export default App
library.add(fab, fas, far)