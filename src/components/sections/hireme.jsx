import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const reasons = [
  {
    emoji: '🏗️',
    title: 'I\'ve led real projects, not just followed them',
    body:
      'At AltSchool, I served as lead frontend developer on the AltHub team project — coordinating the frontend architecture, reviewing teammates\' code, and helping drive the project to completion. That\'s not a solo exercise; that\'s team accountability.',
  },
  {
    emoji: '🔗',
    title: 'I build things that connect to the real world',
    body:
      'From integrating third-party REST APIs to setting up a mock database to unblock team progress when live APIs were unavailable — I\'ve handled the messy, real-world side of frontend development, not just the UI layer.',
  },
  {
    emoji: '♿',
    title: 'Accessibility isn\'t an afterthought for me',
    body:
      'I actively study and apply web accessibility (a11y) principles. In a world where inclusive design is increasingly a requirement — not a nice-to-have — this matters.',
  },
  {
    emoji: '🌍',
    title: 'I bring a perspective most developers don\'t have',
    body:
      'A background in Public Health means I think about the people using the products I build — not just the code. It\'s a genuine differentiator, especially for femtech, edtech, or health-focused teams.',
  },
  {
    emoji: '📈',
    title: 'I\'ve been building consistently, not just in bursts',
    body:
      'From Code First Girls in 2022 to AltSchool in 2024–25, I\'ve been building skills deliberately and continuously. The projects on this portfolio are the evidence.',
  },
]

export const HireMe = () => {
  return (
    <section id="hireme" className="hireme min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
              bg-clip-text text-transparent text-center"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🚀 Why Hire Me?
        </motion.h2>

        <motion.ul
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              className="p-6 rounded-2xl border-2 border-pink-500/30 bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm shadow-lg shadow-pink-500/10 relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3, type: 'spring' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <p className="text-2xl mb-1">{reason.emoji}</p>
                <strong
                  className="text-pink-400 text-lg block mb-2"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  {reason.title}
                </strong>
                <p className="text-gray-300 text-base leading-7">{reason.body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Convinced? Let's build something together. 👇
          </p>
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-3 px-10 rounded-full font-bold text-base shadow-lg shadow-pink-500/40 inline-block"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
            whileHover={{ scale: 1.08, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
