import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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

export const About = () => {
  const frontendSkil = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'Tailwind', icon: 'tailwindcss' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Canva', icon: 'canva' },
    { name: 'Vue', icon: 'vue' },
    { name: 'Netlify', icon: 'netlify' },
    { name: 'Nextjs', icon: 'nextjs' },
  ]

  return (
    <motion.section
      id="about"
      className="about min-h-screen flex items-center justify-center py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="py-20 px-6 max-w-6xl mx-auto space-y-10">
        <motion.h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
              bg-clip-text text-transparent text-center"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
          variants={fadeInUp}
        >
          🌟 About Me
        </motion.h2>

        <motion.div
          className="mb-8 rounded-3xl p-8 border-4 border-pink-500/40 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm shadow-2xl shadow-pink-500/20 relative overflow-hidden group"
          variants={fadeInUp}
          whileHover={{ y: -8, rotate: 1, scale: 1.02 }}
          transition={{ duration: 0.3, type: 'spring' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="text-gray-300 text-[1.25rem] text-center leading-10 relative z-10">
            I'm a Frontend Developer with hands-on experience building responsive and interactive
            web applications using React, Next.js, and modern JavaScript. I enjoy transforming ideas
            and designs into functional, user-friendly interfaces. I have experience working with
            APIs, handling dynamic data, and building scalable frontend architectures. Through my
            training and personal projects, I've collaborated with designers, worked in agile
            environments, and consistently improved application performance and usability. I'm
            currently focused on growing as a frontend engineer by building real-world projects and
            continuously learning modern tools and best practices.
          </p>
        </motion.div>

        <motion.div className="rounded-xl p-8 mb-8" variants={fadeInUp}>
          <div className="rounded-xl p-6">
            <h3
              className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400
                bg-clip-text text-transparent"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              🚀 Frontend Skills
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {frontendSkil.map((skill, _index) => (
                <motion.div
                  key={skill.name}
                  className="items-center p-2 rounded-lg"
                  variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <i className={`devicon-${skill.icon}-plain text-xl mr-2 text-pink-400`}></i>
                  <span
                    className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-yellow-300 py-2 px-5 rounded-full text-sm border-2 border-pink-400/40 font-semibold
                            hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)] hover:scale-110 transition-all"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Education Card */}
          <motion.div
            className="p-6 rounded-2xl border-3 border-cyan-500/40 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm shadow-xl shadow-cyan-500/20 relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3
              className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent relative z-10"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              📚 Education
            </h3>
            <ul className="relative z-10 space-y-4">
              <li>
                <strong className="text-white">Diploma in Frontend Engineering</strong>
                <span className="text-cyan-300"> · AltSchool Africa</span>
                <p className="text-gray-400 text-xs mt-1">2024 – 2025</p>
                <p className="text-gray-300 text-sm leading-6 mt-1">
                  <span className="text-cyan-300">Key areas: </span>
                  React, Next.js, TypeScript, Vue, API Integration, Web Accessibility, Agile,
                  Performance Optimization & Deployment
                </p>
              </li>
              <li>
                <strong className="text-white">Frontend Developer Certification</strong>
                <span className="text-cyan-300"> · Scrimba</span>
                <p className="text-gray-400 text-xs mt-1">2022 – 2024 · 13 modules</p>
                <p className="text-gray-300 text-sm leading-6 mt-1">
                  Project-based curriculum covering HTML5, CSS3, JavaScript, React, and REST APIs.
                </p>
              </li>
              <li>
                <strong className="text-white">MSc Public Health (Merit)</strong>
                <span className="text-cyan-300"> · Anglia Ruskin University</span>
              </li>
            </ul>
          </motion.div>

          {/* Work Experience Card — rewritten */}
          <motion.div
            className="p-6 rounded-2xl border-3 border-purple-500/40 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm shadow-xl shadow-purple-500/20 relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3
              className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              💼 Experience
            </h3>
            <div className="relative z-10 space-y-5 text-sm leading-7">

              <div>
                <p className="font-bold text-white">Frontend Engineering Trainee</p>
                <p className="text-pink-400 text-xs mb-1">AltSchool Africa · Nov 2024 – Nov 2025</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Served as <span className="text-yellow-300 font-semibold">lead frontend developer</span> on the AltHub team project, also assisting as dev team lead</li>
                  <li>Built and deployed responsive apps using React, Next.js, TypeScript & Vue.js</li>
                  <li>Integrated REST APIs, conducted code reviews, and worked in agile sprints</li>
                  <li>Contributed to open-source — Lucide Icons on GitHub</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white">Fullstack Developer Trainee</p>
                <p className="text-pink-400 text-xs mb-1">Code First Girls · May – Aug 2022</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Built a web application collaboratively using React and Node.js</li>
                  <li>Contributed to Figma wireframes and user flow prototypes</li>
                  <li>Supported pre-deployment testing and bug triage</li>
                </ul>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
