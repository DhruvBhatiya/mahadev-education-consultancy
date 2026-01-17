import Link from 'next/link'
import './Services.css'

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Comprehensive Visa Solutions for Your Global Journey</p>
        </div>
      </section>

      <section className="visa-services section">
        <div className="container">
          <h2 className="section-title">Visa Services</h2>
          <p className="section-subtitle">Expert guidance for all your visa needs</p>
          <div className="visa-grid">
            <div className="visa-card">
              <div className="visa-icon">🎓</div>
              <h3>Student Visa</h3>
              <p>
                Pursue your dreams of studying at world-renowned universities. We provide 
                comprehensive assistance for student visa applications, including:
              </p>
              <ul className="service-list">
                <li>University selection and application support</li>
                <li>Visa documentation and preparation</li>
                <li>Financial planning and proof of funds</li>
                <li>Interview preparation and guidance</li>
                <li>Post-arrival support and orientation</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
            </div>

            <div className="visa-card">
              <div className="visa-icon">💼</div>
              <h3>Work Visa</h3>
              <p>
                Advance your career internationally with our work visa services. We help 
                professionals navigate the complex process of obtaining work authorization:
              </p>
              <ul className="service-list">
                <li>Work permit applications</li>
                <li>Employer sponsorship assistance</li>
                <li>Skills assessment and documentation</li>
                <li>Job search support and networking</li>
                <li>Visa renewal and extension services</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
            </div>

            <div className="visa-card">
              <div className="visa-icon">✈️</div>
              <h3>Visitor Visa</h3>
              <p>
                Explore new destinations with confidence. Our visitor visa services ensure 
                a smooth application process for tourism, family visits, and short-term stays:
              </p>
              <ul className="service-list">
                <li>Tourist visa applications</li>
                <li>Family visit visa processing</li>
                <li>Business visitor visa support</li>
                <li>Travel itinerary planning</li>
                <li>Documentation and application review</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations-section section">
        <div className="container">
          <h2 className="section-title">Study Destinations</h2>
          <p className="section-subtitle">Explore opportunities in these top countries</p>
          <div className="destinations-grid">
            <div className="destination-card">
              <div className="destination-flag">🇬🇧</div>
              <h3>United Kingdom</h3>
              <p>
                Home to prestigious universities like Oxford, Cambridge, and Imperial College. 
                The UK offers world-class education, rich history, and excellent career prospects.
              </p>
              <div className="destination-features">
                <span>Top Universities</span>
                <span>Post-Study Work</span>
                <span>Cultural Heritage</span>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-flag">🇺🇸</div>
              <h3>United States</h3>
              <p>
                The USA boasts some of the world's best universities and offers diverse 
                opportunities across various fields. Experience innovation and excellence.
              </p>
              <div className="destination-features">
                <span>Ivy League</span>
                <span>Research Opportunities</span>
                <span>Global Recognition</span>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-flag">🇨🇦</div>
              <h3>Canada</h3>
              <p>
                Known for its welcoming environment and high-quality education system. 
                Canada offers excellent post-graduation work opportunities and pathways to PR.
              </p>
              <div className="destination-features">
                <span>Quality Education</span>
                <span>PR Pathways</span>
                <span>Safe & Welcoming</span>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-flag">🇦🇺</div>
              <h3>Australia</h3>
              <p>
                Australia combines excellent education with a beautiful lifestyle. 
                Top universities, strong economy, and great work-life balance await you.
              </p>
              <div className="destination-features">
                <span>Top Universities</span>
                <span>Work Rights</span>
                <span>Beautiful Lifestyle</span>
              </div>
            </div>

            <div className="destination-card">
              <div className="destination-flag">🇳🇿</div>
              <h3>New Zealand</h3>
              <p>
                Experience quality education in one of the world's most beautiful countries. 
                New Zealand offers excellent education and a peaceful, safe environment.
              </p>
              <div className="destination-features">
                <span>Quality Education</span>
                <span>Natural Beauty</span>
                <span>Safe Environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">Simple steps to your international journey</p>
          <div className="process-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Initial consultation to understand your goals and requirements</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Customized plan based on your profile and destination preferences</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Application</h3>
              <p>Complete assistance with documentation and application submission</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Success</h3>
              <p>Visa approval and support for your journey ahead</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Contact us today for a free consultation and take the first step towards your dream</p>
            <Link href="/contact" className="btn btn-primary">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
