import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className='footer-section' ref={ref}>
      <div className='container'>
        <motion.div
          className='footer-content'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className='brand-info'>
            <h3 className='logo'>HM</h3>
            <p>Building digital excellence through innovative solutions</p>
          </div>

          <div className='footer-links'>
            <div className='link-group'>
              <h4>Navigation</h4>
              <a href='#hero'>Home</a>
              <a href='#about'>About</a>
              <a href='#skills'>Skills</a>
              <a href='#portfolio'>Portfolio</a>
            </div>

            <div className='link-group'>
              <h4>Connect</h4>
              <a href='#contact'>Contact</a>
              <a href='https://www.linkedin.com/in/hadi-m123/' target='_blank'>
                LinkedIn
              </a>
              <a href='https://github.com/hhstylishponicode' target='_blank'>
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <div className='copyright'>
          <p>
            © {new Date().getFullYear()} Hadi Moussawi. Made with
            <FiHeart className='heart-icon' />
            in Lebanon
          </p>
        </div>
      </div>
    </footer>
  );
}
