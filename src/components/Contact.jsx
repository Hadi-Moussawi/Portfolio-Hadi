import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiSend, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Replace with your actual Formspree form ID
  const FORMSPREE_FORM_ID = "mpwqozgg";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 3000); // Reset message after 3 seconds
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
            action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`}
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                className="form-input"
                rows="5"
                required
              ></textarea>
            </div>
            <motion.button
              className="submit-btn"
              type="submit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Send Message <FiSend className="btn-icon" />
            </motion.button>
            {isSubmitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>

          <motion.div className="social-links" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <div className="links-container">
              <a
                href="https://www.linkedin.com/in/hadi-m123/"
                target="_blank"
                className="social-link"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/hhstylishponicode"
                target="_blank"
                className="social-link"
                aria-label="GitHub profile"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="mailto:moussawihadi55@gmail.com"
                className="social-link"
                aria-label="Email address"
              >
                <FiMail /> Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
