import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mahadev Education Consultancy</h3>
            <p>Your trusted partner for study abroad opportunities. We help you explore global education opportunities with 6+ years of experience.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>Student Visa</li>
              <li>Work Visa</li>
              <li>Visitor Visa</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Office: 76000 92449 | 70414 15851</p>
            <p>Dhruval Brahmbhatt: 8490892700</p>
            <p>Gunjan Brahmbhatt: 9898968745</p>
            <p>B-109, Joyos Hubtown, Modhera Circle</p>
          </div>
        </div>

        <div className="footer-branches">
          <p><strong>Branches:</strong> Mehsana, Ahmedabad, Unjha, Visnagar, Patan</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Mahadev Education Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
