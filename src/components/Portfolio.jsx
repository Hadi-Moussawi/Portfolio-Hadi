import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiCode } from 'react-icons/fi'; //FiGithub,
import taurexImage from '../assets/images/taurex.png';
import beautyCastles from '../assets/images/beautyCastles.png';
import weForMedia from '../assets/images/WeForMedia.png';
import beyondMediaMarketing from '../assets/images/beyondMediaMarketing.png';
import homeKit from '../assets/images/homeKit.png';
import dynaPro from '../assets/images/dynaPro.png';

const projects = [
  {
    title: 'Taurex - Trading International Company',
    description: 'Trading multi-million international company based in the UK.',
    image: taurexImage,
    tags: [
      'WordPress',
      'Elementor',
      'Vuejs',
      'JQuery',
      'Multilingual',
      'MySQL',
    ],
    links: {
      live: 'https://www.tradetaurex.com/',
    },
    categories: ['trading', 'informative', 'e-commerce'],
  },
  {
    title: 'BeautyCastles - E-commerce Beauty Company',
    description:
      'Beauty products for all skin types, based in Lebanon & Egypt.',
    image: beautyCastles,
    tags: ['WordPress', 'Elementor', 'PHP', 'JQuery', 'Multilingual', 'MySQL'],
    links: {
      live: 'https://www.beautycastles.com/',
    },
    categories: ['e-commerce', 'project management'],
  },
  {
    title: 'WeForMedia - A Digital Marketing Agency',
    description: 'A digital marketing agency based in Lebanon & France.',
    image: weForMedia,
    tags: ['WordPress', 'Elementor', 'JQuery', 'Multilingual', 'MySQL'],
    links: {
      live: 'https://www.weformedia.com/',
    },
    categories: 'informative',
  },
  {
    title: 'Beyond Media Marketing - A Digital Marketing Agency',
    description: 'A Digital Marketing Agency based in the US.',
    image: beyondMediaMarketing,
    tags: ['WordPress', 'Elementor', 'JQuery', 'MySQL', 'Moment Js', 'GSAP'],
    links: {
      live: 'https://beyondmediamarketing.com/',
    },
    categories: ['informative', 'project management'],
  },
  {
    title: 'HomeKit - A Furniture Store',
    description: 'A furniture store based in Lebanon.',
    image: homeKit,
    tags: ['WordPress', 'GSAP', 'PHP', 'JQuery', 'Own Carousel', 'MySQL'],
    links: {
      live: 'https://www.homekitlb.com/',
    },
    categories: ['project management', 'informative'],
  },
  {
    title: 'Dyna pro - Empowering Businesses Through Microsoft Dynamics',
    description:
      'Empowering businesses through microsoft dynamics based in Dubai and Lebanon.',
    image: dynaPro,
    tags: ['WordPress', 'GSAP', 'PHP', 'JQuery', 'Bootstrap', 'MySQL'],
    links: {
      live: 'https://dynapro.co/about/',
    },
    categories: ['informative'],
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const filteredProjects = projects.filter((project) =>
    selectedCategory === 'all'
      ? true
      : project.categories && project.categories.includes(selectedCategory)
  );

  return (
    <section className='portfolio-section' id='portfolio' ref={ref}>
      <div className='container'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className='gradient-text'>Projects</span>
        </motion.h2>

        <div className='filter-container'>
          <button
            className={`filter-btn ${
              selectedCategory === 'all' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === 'e-commerce' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('e-commerce')}
          >
            E-commerce
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === 'informative' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('informative')}
          >
            Informative
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === 'trading' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('trading')}
          >
            Trading
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === 'project management' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('project management')}
          >
            Project Management
          </button>
        </div>

        <AnimatePresence>
          <motion.div
            className='projects-grid'
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            key={selectedCategory}
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                className='project-card'
                variants={itemVariants}
                whileHover={{ y: -5 }}
                layout
                exit='exit'
              >
                <div className='project-image'>
                  <img src={project.image} alt={project.title} />
                  <div className='project-overlay'>
                    <div className='project-links'>
                      <a
                        href={project.links.live}
                        className='project-link'
                        aria-label='Live demo'
                        target='_blank'
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>

                <div className='project-content'>
                  <div className='project-header'>
                    <FiCode className='project-icon' />
                    <h3 className='project-title'>
                      <a
                        style={{ color: 'white', textDecoration: 'none' }}
                        href={project.links.live}
                        target='_blank'
                      >
                        {project.title}
                      </a>
                    </h3>
                  </div>

                  <p className='project-description'>{project.description}</p>

                  <div className='project-tags'>
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className='tag'
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.p
            className='no-projects'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects found in this category
          </motion.p>
        )}
      </div>
    </section>
  );
}
