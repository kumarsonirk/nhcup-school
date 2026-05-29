import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import Sports from './components/Sports'
import Schedule from './components/Schedule'
import RegCta from './components/RegCta'
import Footer from './components/Footer'
import Register from './pages/Register'
import ScrollToTop from './components/ScrollToTop'
import { useScrollReveal } from './hooks/useScrollReveal'

function MainSite() {
  const [mobileOpen, setMobileOpen] = useState(false)
  useScrollReveal()

  useEffect(() => {
    const btn = document.getElementById('back-top')
    if (!btn) return
    const handler = () => btn.classList.toggle('show', window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <Loader />
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu open={mobileOpen} closeMobile={() => setMobileOpen(false)} />
      <main>
        <Hero />
        <Sports />
        <Schedule />
        <RegCta />
      </main>
      <Footer />
      <a href="#hero" id="back-top" className="back-top" aria-label="Back to top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  )
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/:sportId" element={<Register />} />
    </Routes>
    </>
  )
}
