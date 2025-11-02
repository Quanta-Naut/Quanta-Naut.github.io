import { useState, useEffect } from 'react'
import anime from 'animejs'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animate navbar on mount
    anime({
      targets: '.nav-link',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutExpo'
    })
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Portfolio</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
          <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
