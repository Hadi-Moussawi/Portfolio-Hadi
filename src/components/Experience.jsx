import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiCalendar, FiArrowUpRight } from "react-icons/fi";

const experiences = [
  {
    company: "BeyondMediaMarketing",
    role: "Team Lead - Contractor",
    duration: "2024 - Present",
    achievements: [
      "Manage risks, optimize processes and handle budgetary considerations",
      "Ensure best practices are being followed and quality assurance",
      "Provide technical guidence, conduct code reviews",
      "Maintain clear communication with stakeholder",
      "Mentor team memebers, foster collaboration",
      "Oversee project planning, management",
    ],
  },
  {
    company: "Freelancer",
    role: "Web Developer",
    duration: "2017 - Present",
    achievements: [
      "Building a responsive and user-friendly UI/UX (if no separate designer is involved)",
      "Setting up a CMS (e.g., WordPress, Webflow, Shopify) or custom-built admin panel",
      "Understanding the clients needs, goals, and target audience",
      "Developing the front-end and back-end",
      "On-page SEO and Speed Optimizations",
    ],
  },
  {
    company: "Balance Brightness",
    role: "Project Manager",
    duration: "2022 - 2023",
    achievements: [
      "Create a project timeline with milestones and deadlines",
      "Define the project scope, objectives, and deliverables",
      "Gather requirements from the client or stakeholders",
      "Post-Launch Support & Continuous Improvement",
      "Identify risks and create mitigation plans",
      "Monitoring Progress & Problem-Solving",
      "Resource & Budget Management",
      "Quality Control & Testing",
    ],
  },
  {
    company: "Balance Brightness co",
    role: "Web Developer & Tutor",
    duration: "2019 - 2021",
    achievements: [
      "Providing Hands-on Practice & Projects",
      "Monitoring Progress & Problem-Solving",
      "Develop the front-end and back-end",
      "Teaching Web Development Concepts",
      "Debug & Performance Optimization",
      "Teaching Online or In-Person",
      "Creating Learning Materials",
      "SEO & Security",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="experience-section" id="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="gradient-text">Journey</span>
        </motion.h2>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <FiBriefcase className="experience-icon" />
                  <div>
                    <h3 className="company">{exp.company}</h3>
                    <div className="role-duration">
                      <span className="role">{exp.role}</span>
                      <span className="duration">
                        <FiCalendar /> {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiArrowUpRight className="achievement-icon" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
