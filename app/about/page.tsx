import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Your Trusted Partner in Global Education</p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-main">
            <div className="about-text">
              <h2>Welcome to Mahadev Education Consultancy</h2>
              <p>
                With over <strong>6 years of trusted experience</strong>, Mahadev Education Consultancy 
                has been a leading name in helping students achieve their dreams of studying abroad. 
                We specialize in providing comprehensive visa consultancy services for students, 
                professionals, and travelers looking to explore opportunities in top destinations worldwide.
              </p>
              <p>
                Our mission is to make international education accessible to everyone by providing 
                expert guidance, personalized support, and transparent processes. We understand that 
                applying for visas and planning to study abroad can be overwhelming, which is why we 
                are committed to making your journey as smooth as possible.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🎓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Integrity</h3>
              <p>We maintain the highest standards of honesty and transparency in all our dealings.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>Building long-term relationships based on trust and reliability with our clients.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Expertise</h3>
              <p>Years of experience and deep knowledge of visa processes and requirements.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Dedication</h3>
              <p>Committed to your success and going the extra mile to help you achieve your goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-content">
            <div className="team-member">
              <div className="member-avatar">DB</div>
              <h3>Dhruval Brahmbhatt</h3>
              <p className="member-role">Founder & Consultant</p>
              <p className="member-description">
                With extensive experience in education consultancy, Dhruval leads our team 
                in providing exceptional service and guidance to students and professionals 
                seeking international opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="branches-section section">
        <div className="container">
          <h2 className="section-title">Our Branches</h2>
          <p className="section-subtitle">Conveniently located across Gujarat for easy access</p>
          <div className="branches-grid">
            <div className="branch-card">
              <div className="branch-icon">📍</div>
              <h3>Mehsana</h3>
            </div>
            <div className="branch-card">
              <div className="branch-icon">📍</div>
              <h3>Ahmedabad</h3>
            </div>
            <div className="branch-card">
              <div className="branch-icon">📍</div>
              <h3>Unjha</h3>
            </div>
            <div className="branch-card">
              <div className="branch-icon">📍</div>
              <h3>Visnagar</h3>
            </div>
            <div className="branch-card">
              <div className="branch-icon">📍</div>
              <h3>Patan</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
