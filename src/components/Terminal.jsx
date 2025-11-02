import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import './Terminal.css'
import { Moon, Sun } from 'lucide-react'

const Terminal = () => {
  const [lines, setLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typingCommand, setTypingCommand] = useState('')
  const [showPrompt, setShowPrompt] = useState(false)
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
        'Graphics Programmer | AI/ML Engineer | Rocketry Enthusiast',
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
        'Some run on code, some on fuel. All on curiosity,',
        ''
      ]
    },
    {
  command: 'ls -la skills/',
  output: [
    'drwxr-xr-x  5  quantanaut  staff   160  Nov  2  2024  .',
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
        'Email       → tarun.green42@gmail.com',
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

  useEffect(() => {
    if (currentLineIndex < commands.length) {
      const timer = setTimeout(() => {
        typeCommand(commands[currentLineIndex])
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex])

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [lines])

  // Helper function to parse text and create clickable links and highlights
  const parseTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
    const nameRegex = /(Tarun Kumar S)/g
    const combinedRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+|Tarun Kumar S)/g

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
      }
      return part
    })
  }

  const typeCommand = async (cmd) => {
    setIsTyping(true)
    setShowPrompt(true)
    setTypingCommand('')

    // Scroll to bottom when typing starts
    setTimeout(() => {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }
    }, 100)

    // Type command character by character
    const commandText = cmd.command
    for (let i = 0; i <= commandText.length; i++) {
      setTypingCommand(commandText.slice(0, i))
      await new Promise(resolve => setTimeout(resolve, 50))

      // Keep scrolling to bottom while typing
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }
    }

    // Wait a bit after typing completes
    await new Promise(resolve => setTimeout(resolve, 300))

    // Hide typing prompt and add completed command simultaneously
    setShowPrompt(false)
    const promptLine = { type: 'prompt', command: cmd.command, id: Date.now() }
    setLines(prev => [...prev, promptLine])

    // Wait before showing output
    await new Promise(resolve => setTimeout(resolve, 200))

    const outputLines = cmd.output.map((line, index) => ({
      type: 'output',
      text: line,
      id: Date.now() + index
    }))

    setLines(prev => [...prev, ...outputLines])

    // Animate output lines
    anime({
      targets: '.output-line:not(.animated)',
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 400,
      delay: anime.stagger(50),
      easing: 'easeOutQuad',
      complete: () => {
        document.querySelectorAll('.output-line').forEach(el => {
          el.classList.add('animated')
        })
      }
    })

    setIsTyping(false)
    setTypingCommand('')
    setCurrentLineIndex(prev => prev + 1)
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
            <pre className="ascii-art">{`
  ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗████████╗ █████╗     ███╗   ██╗ █████╗ ██╗   ██╗████████╗
 ██╔═══██╗██║   ██║██╔══██╗████╗  ██║╚══██╔══╝██╔══██╗    ████╗  ██║██╔══██╗██║   ██║╚══██╔══╝
 ██║   ██║██║   ██║███████║██╔██╗ ██║   ██║   ███████║    ██╔██╗ ██║███████║██║   ██║   ██║
 ██║▄▄ ██║██║   ██║██╔══██║██║╚██╗██║   ██║   ██╔══██║    ██║╚██╗██║██╔══██║██║   ██║   ██║
 ╚██████╔╝╚██████╔╝██║  ██║██║ ╚████║   ██║   ██║  ██║    ██║ ╚████║██║  ██║╚██████╔╝   ██║
  ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝    ╚═╝
            `}</pre>
            <p className="welcome-text">Welcome to <span className="highlight">Tarun's</span> terminal!</p>
            <p className="welcome-text">Initializing...</p>
            <br />
          </div>

          {lines.map((line, index) => (
            <div key={line.id}>
              {line.type === 'prompt' && (
                <div className="prompt-line">
                  <span className="prompt-symbol">$</span>
                  <span className="command-text">{line.command}</span>
                </div>
              )}
              {line.type === 'output' && (
                <div className="output-line">{parseTextWithLinks(line.text)}</div>
              )}
            </div>
          ))}

          {showPrompt && (
            <div className="prompt-line">
              <span className="prompt-symbol">$</span>
              <span className="command-text">{typingCommand}</span>
              <span className="typing-cursor">|</span>
            </div>
          )}

          <div ref={endRef}></div>
        </div>
      </div>
    </div>
  )
}

export default Terminal
