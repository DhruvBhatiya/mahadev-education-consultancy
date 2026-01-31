import Link from 'next/link'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* <div className="trust-badge">
            <div className="trust-diamond">
              <span className="trust-text">TRUST OF</span>
              <span className="trust-number">6</span>
              <span className="trust-years">YEARS</span>
            </div>
          </div> */}
          <h1 className="hero-title">
            <span className="hero-title-orange">WANT TO</span>
            <span className="hero-title-blue"> STUDY ABROAD ?</span>
          </h1>
          <p className="hero-subtitle">WE CAN HELP YOU TO</p>
          <h2 className="hero-highlight">EXPLORE OPPORTUNITIES</h2>
          <p className="hero-description">
            Your trusted partner for study abroad opportunities. We provide expert guidance 
            for student visas, work visas, and visitor visas to top destinations worldwide.
          </p>
          <div className="hero-buttons">
            <Link href="/services" className="btn btn-primary">Our Services</Link>
            <Link href="/contact" className="btn btn-outline">Get Started</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="airplane-icon">✈️</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive visa solutions for your global journey</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Student Visa</h3>
              <p>Expert guidance for pursuing education in top universities worldwide</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Work Visa</h3>
              <p>Navigate work visa processes for international career opportunities</p>
            </div>
            <div className="service-card">
              <div className="service-icon">✈️</div>
              <h3>Visitor Visa</h3>
              <p>Seamless visitor visa assistance for travel and tourism</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>NIOS - HSC/SSC</h3>
              <p>Pass your 10th and 12th grade exams through NIOS and secure admission to your favorite college</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="countries-section section">
        <div className="container">
          <h2 className="section-title">Study Destinations</h2>
          <p className="section-subtitle">Explore opportunities in these top countries</p>
          <div className="countries-grid">
            <div className="country-card">
              <div className="country-flag">🇬🇧</div>
              <h3>United Kingdom</h3>
              <p>World-class education and rich cultural heritage</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇺🇸</div>
              <h3>United States</h3>
              <p>Premier universities and diverse opportunities</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇨🇦</div>
              <h3>Canada</h3>
              <p>High-quality education and welcoming environment</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇦🇺</div>
              <h3>Australia</h3>
              <p>Excellent education system and beautiful lifestyle</p>
            </div>
            <div className="country-card">
              <div className="country-flag">🇳🇿</div>
              <h3>New Zealand</h3>
              <p>Quality education in a stunning natural setting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">6+</div>
              <h3>Years of Experience</h3>
              <p>Trusted expertise in visa consultancy</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">1000+</div>
              <h3>Successful Cases</h3>
              <p>Students successfully placed abroad</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">5</div>
              <h3>Branch Locations</h3>
              <p>Conveniently located across Gujarat</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">24/7</div>
              <h3>Support</h3>
              <p>Dedicated assistance throughout your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Contact us today and take the first step towards your dream education abroad</p>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
