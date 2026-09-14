import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import WebDecorations from './components/WebDecorations'

import Intro from './sections/Intro'
import Hero from './sections/Hero'
import About from './sections/About'
import Engineer from './sections/Engineer'
import Creator from './sections/Creator'
import Experimenter from './sections/Experimenter'
import Experience from './sections/Experience'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <div className="relative bg-void text-paper min-h-screen">
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <WebDecorations />
      <main className="relative z-10">
        <Intro />
        <Hero />
        <About />
        <Engineer />
        <Creator />
        <Experimenter />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
