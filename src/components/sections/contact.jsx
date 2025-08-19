import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [formStatus, setFormStatus] = useState({
        success: false,
        submitting: false,
        error: false,
        message: "",
    });

    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({  success: false,
        submitting: true,
        error: false,
        message: "", });

        try{
            await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID,{
                name: formData.name,
                email: formData.email,
                message: formData.message
            });
            setFormStatus({ success: true, submitting: false, error: false, message: "Message sent successfully!" });
            setFormData({ name: "", email: "", message: "" });
        }
        catch {
            setFormStatus({ success: false, submitting: false, error: true, message: "Failed to send message." });
        }
    }

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 variants={fadeInUp} initial="initial" animate="animate" viewport={{ once: true }}>
        Get in Touch
      </motion.h2>

      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form" variants={staggerContainer} onSubmit={handleSubmit}>
          <motion.input
            type="text"
            placeholder="Your Name"
            name="name"
            whileFocus={{ scale: 1.02 }}
            required
            onChange={handleChangeInput}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            name="email"
            whileFocus={{ scale: 1.02 }}
            required
            onChange={handleChangeInput}
          />
          <motion.textarea
            placeholder="Your Message"
            name="message"
            whileFocus={{ scale: 1.02 }}
            required
            onChange={handleChangeInput}
          ></motion.textarea>
          <motion.button className='submit-btn' 
          type="submit" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>


          {/* Success or Error Message */}
           {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              } `}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
