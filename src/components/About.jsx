import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='about-section' id='about' ref={ref}>
      <div className='container'>
        <motion.h2
          className='section-title'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <span className='gradient-text'>About</span> Expertise
        </motion.h2>

        <div className='about-grid'>
          <motion.div
            className='bio-card'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='decorative-line'></div>

            <p className='bio-text'>
              With <span className='highlight'>8+ years</span> of experience in
              full-stack development and technical leadership, I specialize in:
            </p>

            <div className='expertise-list'>
              <motion.div
                className='expertise-item'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FiCode className='expertise-icon' />
                <h3>Building Scalable Systems</h3>
                <p>Modern architectures using cutting-edge technologies</p>
              </motion.div>

              <motion.div
                className='expertise-item'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              >
                <FiUsers className='expertise-icon' />
                <h3>Leading Teams</h3>
                <p>Agile teams focused on quality and innovation</p>
              </motion.div>

              <motion.div
                className='expertise-item'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              >
                <FiTrendingUp className='expertise-icon' />
                <h3>Driving Growth</h3>
                <p>Technical strategies that deliver business value</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className='tech-card'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className='tech-title'>Key Strengths</h3>
            <div className='tech-grid'>
              {[
                'WordPress',
                'PHP',
                'React JS',
                'JavaScript',
                'HTML5',
                'CSS3',
                'GitHub',
                'Version control',
                'Security',
                'Information Technology',
                'Agile',
                'Scrum',
                'Communication',
                'LeaderShip',
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className='tech-item'
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className='tech-background'></div>
                  <span className='tech-name'>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
