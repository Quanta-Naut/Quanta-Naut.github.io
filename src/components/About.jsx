import { useEffect, useRef } from 'react'
import anime from 'animejs'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            anime({
              targets: '.about-title',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo'
            })

            anime({
              targets: '.about-description',
              translateY: [30, 0],
              opacity: [0, 1],
              delay: 200,
              duration: 1000,
              easing: 'easeOutExpo'
            })

            anime({
              targets: '.skill-item',
              scale: [0.8, 1],
              opacity: [0, 1],
              delay: anime.stagger(100, { start: 400 }),
              duration: 800,
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

  const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git', 'MongoDB', 'Express']

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              The complete developer's toolkit
            </h1>
            <p className="about-description">
              I'm a full-stack developer specializing in building exceptional digital experiences.
              With expertise in modern web technologies, I transform ideas into elegant, performant applications.
            </p>
            <p className="about-description">
              From pixel-perfect frontend interfaces to robust backend systems, I craft solutions
              that combine beautiful design with powerful functionality.
            </p>
          </div>
          <div className="skills-container">
            <h3 className="skills-title">Technologies I work with</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
