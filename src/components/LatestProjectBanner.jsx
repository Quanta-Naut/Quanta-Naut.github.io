import { useMemo } from 'react'
import './LatestProjectBanner.css'

const LatestProjectBanner = () => {
  // Memoize particle configurations to prevent recalculation on every render
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      key: i,
      delay: `${i * 0.3}s`,
      duration: `${3 + (i % 3)}s`,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${2 + Math.random() * 3}px`
    }))
  }, []) // Empty dependency array means this only runs once

  return (
    <div className="featured-project-banner">
      <div className="banner-content">
        {/* Particle background */}
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.key}
              className="particle"
              style={{
                '--delay': particle.delay,
                '--duration': particle.duration,
                '--x': particle.x,
                '--y': particle.y,
                '--size': particle.size
              }}
            ></div>
          ))}
        </div>
        <span className="banner-label">HOTTEST PROJECT:</span>
        <a
          href="https://peargent.online"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-banner"
        >
          Peargent
          <svg className="external-link-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> */}
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default LatestProjectBanner