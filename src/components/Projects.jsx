import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            anime({
              targets: '.projects-title',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo'
            })

            anime({
              targets: '.project-card',
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(150, { start: 300 }),
              duration: 1000,
              easing: 'easeOutExpo'
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that provides real-time weather data and forecasts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      technologies: ['React', 'Anime.js', 'CSS3'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <h2 className="projects-title">Featured Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
