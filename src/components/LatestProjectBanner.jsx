import './LatestProjectBanner.css'

const LatestProjectBanner = () => {
  return (
    <div className="featured-project-banner">
      <div className="banner-content">
        {/* Particle background */}
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${i * 0.3}s`,
              '--duration': `${3 + (i % 3)}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 3}px`
            }}></div>
          ))}
        </div>
        <span className="banner-label">HOTTEST PROJECT:</span>
        <a
          href="https://www.thebaker.me"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-banner"
        >
          The Baker
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