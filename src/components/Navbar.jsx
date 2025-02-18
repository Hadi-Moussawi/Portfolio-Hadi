import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close menu on resize or scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };

    const handleScroll = () => setIsOpen(false);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <nav className='sticky-nav'>
        <div className='nav-container'>
          <a href='#hero' className='nav-brand'>
            HM
          </a>

          <ul className='nav-links'>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${
                    activeLink === link.href ? 'active' : ''
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className='mobile-menu-toggle'
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label='Navigation menu'
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Simplified Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className='mobile-nav-header'>
          <a href='#hero' className='nav-brand'>
            HM
          </a>
          <button
            className='mobile-menu-close'
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <nav className='mobile-nav-links'>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${
                activeLink === link.href ? 'active' : ''
              }`}
              onClick={() => {
                setActiveLink(link.href);
                setIsOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
