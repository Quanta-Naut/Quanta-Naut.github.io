import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // Animate hero text
    anime.timeline()
      .add({
        targets: '.hero-title .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000
      }, '-=600')
      .add({
        targets: '.hero-cta',
        translateY: [30, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 800
      }, '-=400')

    // Create animated grid background
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create animated dots
    const dots = []
    const numDots = 50

    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      })
    }

    function drawDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(99, 102, 241, 0.6)'
      dots.forEach(dot => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        dot.x += dot.speedX
        dot.y += dot.speedY

        // Wrap around edges
        if (dot.x < 0) dot.x = canvas.width
        if (dot.x > canvas.width) dot.x = 0
        if (dot.y < 0) dot.y = canvas.height
        if (dot.y > canvas.height) dot.y = 0
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)'
      ctx.lineWidth = 1

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(drawDots)
    }

    drawDots()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section className="hero" ref={heroRef}>
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">
          {splitText('Creative Developer')}
        </h1>
        <p className="hero-subtitle">
          Building exceptional digital experiences with modern web technologies
        </p>
        <div className="hero-cta">
          <button className="cta-btn primary" onClick={() => scrollToSection('projects')}>
            View Work
          </button>
          <button className="cta-btn secondary" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
