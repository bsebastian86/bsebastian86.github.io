import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Intro } from './components/Intro'
import { Process } from './components/Process'
import { Experience } from './components/Experience'
import { useStars } from './hooks/useStars'
import { useSpotlight } from './hooks/useSpotlight'

export default function App() {
  useStars()
  useSpotlight()

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
  }, [])

  return (
    <div className="page">
      <canvas className="stars-field" aria-hidden="true" />
      <canvas className="cursor-field" aria-hidden="true" />
      <div className="shell">
        <Intro />
        <main>
          <About />
          <Experience />
          <Process />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}
