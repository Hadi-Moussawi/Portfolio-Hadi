import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import { MdOutlineManageAccounts } from 'react-icons/md';

const skillCategories = [
  {
    title: 'Frontend Mastery',
    icon: <FiCode />,
    skills: ['React', 'HTML', 'CSS3', 'Redux', 'Tailwind CSS'],
    color: '#2ecc71',
  },
  {
    title: 'Backend Expertise',
    icon: <FiServer />,
    skills: ['PHP', 'APIs', 'CI/CD', 'Caching', 'CDN'],
    color: '#3498db',
  },
  {
    title: 'Database Systems',
    icon: <FiDatabase />,
    skills: [
      'MySQL',
      'Firebase',
      'phpMyAdmin',
      'Query Optimization',
      'Caching',
    ],
    color: '#9b59b6',
  },
  {
    title: 'Tools & Methods',
    icon: <FiTool />,
    skills: [
      'Git',
      'GitHub',
      'VsCode',
      'Netlify',
      'cPanel',
      'Jira',
      'Scrum',
      'Figma',
      'Clickup',
      'Asana',
    ],
    color: '#e74c3c',
  },
  {
    title: 'Management',
    icon: <MdOutlineManageAccounts />,
    skills: [
      'Time & Resource Management',
      'Stakeholder Management',
      'Reporting & Analytics',
      'Issue Tracking ',
      'Documentation',
      'Communication',
      'Tools Picking',
      'Reporting',
      'Empathy',
      'Agile',
    ],
    color: '#e67e22',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

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
  };

  return (
    <section className='skills-section' id='skills' ref={ref}>
      <div className='container'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className='gradient-text'>Skills</span>
        </motion.h2>

        <motion.div
          className='skills-grid'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className='skill-category'
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{ borderColor: category.color }}
            >
              <div className='category-header'>
                <div
                  className='category-icon'
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className='skills-list'>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className='skill-item'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span>{skill}</span>
                    <div
                      className='skill-progress'
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <motion.div
                        className='progress-bar'
                        initial={{ width: 0 }}
                        animate={{ width: `100%` }} //'${Math.random() * 40 + 60}%'
                        transition={{ delay: 0.5 }}
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
