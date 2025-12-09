import { useState, useEffect, useRef } from 'react'
import './Terminal.css'
import { Moon, Sun } from 'lucide-react'
import LatestProjectBanner from './LatestProjectBanner'

const Terminal = () => {
  const [theme, setTheme] = useState('light')
  const terminalRef = useRef(null)
  const endRef = useRef(null)

  // Load theme from localStorage or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('terminal-theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Detect system theme preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('terminal-theme')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Update html background when theme changes
  useEffect(() => {
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#F4EDE4'
    document.body.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#F4EDE4'
  }, [theme])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('terminal-theme', newTheme)
  }

  const commands = [
    {
      command: 'whoami',
      output: [
        'Tarun Kumar S',
        'Graphics Programmer | AI/ML Engineer | <br class="mobile-break">Rocketry Enthusiast',
        ''
      ]
    },
    {
      command: 'cat about.txt',
      output: [
        'Hey there! 👋',
        '',
        'I like building things that move,',
        'whether it’s pixels, data, or engines.',
        '',
        'Some run on code, some on fuel,',
        'All on curiosity,',
        ''
      ]
    },
    {
  command: 'ls -la skills/',
  output: [
    'drwxr-xr-x  5  quantanaut  staff   160  Oct  1  2025  .',
    '',
    'LANG/        Rust • TypeScript • Python • C++',
    'WEB/         Next.js • Full Stack • Tauri • wgpu-rs',
    'AI_ML/       LLMs • Pytorch • Agentic AI',
    'DEVOPS/      Docker • AWS • GitHub Actions • CI/CD',
    'ROCKETRY/    Solid Motors • Liquid Engines • Simulation',
    ''
  ]
},
    {
      command: 'cat links.txt',
      output: [
        'Connect with me:',
        '',
        'GitHub      → https://github.com/Quanta-Naut',
        'LinkedIn    → https://www.linkedin.com/in/tarsk',
        'Instagram   → https://www.instagram.com/quantum._naut/',
        'Projects    → https://quanta-naut.github.io/projects/',
        'Email       → tarun.mecontact@gmail.com',
        '',
        'Feel free to reach out!',
        ''
      ]
    },
    {
      command: 'cat support.txt',
      output: [
        'Sponsor me:',
        '',
        'Github Sponsor   → https://github.com/sponsors/Quanta-Naut',
        'Buy me Coffee    → https://www.buymeacoffee.com/quanta.naut',
        '',
        ''
      ]
    },
    {
      command: 'echo "Thanks for visiting!"',
      output: [
        'Thanks for visiting!',
        '',
        ''
      ]
    }
  ]



  // Helper function to parse text and create clickable links and highlights
  const parseTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
    const nameRegex = /(Tarun Kumar S)/g
    const breakRegex = /(<br class="mobile-break">)/g
    const combinedRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+|Tarun Kumar S|<br class="mobile-break">)/g

    const parts = text.split(combinedRegex)

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        // Clean display text: remove https://, http://, and www.
        const displayText = part.replace(/^https?:\/\/(www\.)?/, '')

        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link"
          >
            {displayText}
          </a>
        )
      } else if (part.match(emailRegex)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            className="terminal-link"
          >
            {part}
          </a>
        )
      } else if (part.match(nameRegex)) {
        return (
          <span key={index} className="highlight">
            {part}
          </span>
        )
      } else if (part.match(breakRegex)) {
        return <br key={index} className="mobile-break" />
      }
      return part
    })
  }



  return (
    <div className={`terminal-wrapper ${theme}`}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn close"></span>
            <span className="btn minimize"></span>
            <span className="btn maximize"></span>
          </div>
          <div className="terminal-title">quantanaut@terminal:~</div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </div>
        <div className="terminal-body" ref={terminalRef}>
          <div className="terminal-welcome">
            <div className="ascii-container">
            <pre className="ascii-art">{`
  ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗████████╗ █████╗     ███╗   ██╗ █████╗ ██╗   ██╗████████╗
 ██╔═══██╗██║   ██║██╔══██╗████╗  ██║╚══██╔══╝██╔══██╗    ████╗  ██║██╔══██╗██║   ██║╚══██╔══╝
 ██║   ██║██║   ██║███████║██╔██╗ ██║   ██║   ███████║    ██╔██╗ ██║███████║██║   ██║   ██║
 ██║▄▄ ██║██║   ██║██╔══██║██║╚██╗██║   ██║   ██╔══██║    ██║╚██╗██║██╔══██║██║   ██║   ██║
 ╚██████╔╝╚██████╔╝██║  ██║██║ ╚████║   ██║   ██║  ██║    ██║ ╚████║██║  ██║╚██████╔╝   ██║
  ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝    ╚═╝
            `}</pre>
          </div>
            <p className="welcome-text">Welcome to <span className="highlight">Tarun's</span> terminal!</p>
            <p className="welcome-text">Initializing...</p>
            <br />
            <LatestProjectBanner />
            <br />
          </div>

          {commands.map((cmd, index) => (
            <div key={index} className="command-group">
              <div className="prompt-line">
                <span className="prompt-symbol">$</span>
                <span className="command-text">{cmd.command}</span>
              </div>
              <div className="output-container">
                {cmd.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="output-line">
                    {parseTextWithLinks(line)}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div ref={endRef}></div>
        </div>
      </div>
    </div>
  )
}

export default Terminal
