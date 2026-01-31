'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Navbar.css'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
         <Image
      src="/images/logo.png"
      alt="Dhruv Tech Logo"
      width={200}
      height={80}
    />
          {/* <div className="logo-icon">M</div>
          <div className="logo-text">
            <span className="logo-name">Mahadev</span>
            <span className="logo-tagline">EDUCATION CONSULTANCY</span>
          </div> */}
        </Link>

        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)} className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)} className={pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)} className={pathname === '/services' ? 'active' : ''}>Services</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)} className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
