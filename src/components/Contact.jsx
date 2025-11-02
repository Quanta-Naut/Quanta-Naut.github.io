import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            anime({
              targets: '.contact-title',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo'
            })

            anime({
              targets: '.contact-form',
              translateY: [30, 0],
              opacity: [0, 1],
              delay: 300,
              duration: 1000,
              easing: 'easeOutExpo'
            })

            anime({
              targets: '.contact-info-item',
              scale: [0.9, 1],
              opacity: [0, 1],
              delay: anime.stagger(100, { start: 500 }),
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <h2 className="contact-title">Let's work together</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="form-input form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-info-item">
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
