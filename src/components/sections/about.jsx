import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const About = () => {
const frontendSkil = [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Figma", icon: "figma" },
    { name: "Canva", icon: "canva" },
    { name: "Vue", icon: "vue" },
    { name: "Netlify", icon: "netlify" }
]

    return (

        <motion.section
        id="about"
        className="about min-h-screen flex items-center justify-center py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        >
        <div className="max-w-3xl max-auto px-4">
            <motion.h2
              className="text-5xl font-bold mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
              bg-clip-text text-transparent text-center"
              style={{ fontFamily: "Fredoka, sans-serif" }}
              variants={fadeInUp}
            >
                🌟 About Me
            </motion.h2>

           <motion.div
             className="mb-8 rounded-3xl p-8 border-4 border-pink-500/40 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm shadow-2xl shadow-pink-500/20 relative overflow-hidden group"
             variants={fadeInUp}
             whileHover={{ y: -8, rotate: 1, scale: 1.02 }}
             transition={{ duration: 0.3, type: "spring" }}
           >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-gray-300 text-[1.125rem] text-center leading-8 relative z-10">
            I specialize in front-end development, focusing on building responsive
            and user-friendly interfaces. My journey in web development started with a
            curiosity to understand how the web works, and it has since evolved
            into a full-fledged career. I enjoy working with modern technologies
            like Vue, React, Tailwind CSS, and JavaScript to bring my ideas to life.
              </p>
           </motion.div>

       
          
          <motion.div
            className="rounded-xl p-8 mb-8"
            variants={fadeInUp}
          >
            <div className="rounded-xl p-6">
                <h3 className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400
                bg-clip-text text-transparent" style={{ fontFamily: "Fredoka, sans-serif" }}>
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
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <i className={`devicon-${skill.icon}-plain text-xl mr-2 text-pink-400`}></i>
                            <span className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-yellow-300 py-2 px-5 rounded-full text-sm border-2 border-pink-400/40 font-semibold
                            hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)] hover:scale-110 transition-all" style={{ fontFamily: "Poppins, sans-serif" }}>{skill.name}</span>
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
                    <motion.div
                      className="p-6 rounded-2xl border-3 border-cyan-500/40 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm shadow-xl shadow-cyan-500/20 relative overflow-hidden group"
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h3 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent relative z-10" style={{ fontFamily: "Fredoka, sans-serif" }}>
                            📚 Education
                        </h3>
                        <ul className="relative z-10">
                            <li><strong>Diploma in Software Engineering (Frontend)</strong> - AltSchool Africa (2024/25)</li>
                            <p className="text-gray-300 mb-6 mt-2 text-sm leading-6">
                               <em> Relevant courses:</em>
                               <span className="text-cyan-300"> HTML, CSS, and JavaScript, Vue, Nextjs, React, TypeScript, Git and GitHub,Responsive Web Design, UI/UX Design Principles, Agile Methodologies, Web Accessibility, Testing and Debugging, Deployment and Hosting, API Integration, Performance Optimization, Cross-Browser Compatibility, Progressive Web Apps (PWAs), Web Security Best Practices</span>
                            </p>

                            <li><strong>Certificate in Web Development</strong> - FreeCodeCamp (2023)</li>
                        </ul>
                    </motion.div>

                    <motion.div
                      className="p-6 rounded-2xl border-3 border-purple-500/40 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm shadow-xl shadow-purple-500/20 relative overflow-hidden group"
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.03, rotate: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h3 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10" style={{ fontFamily: "Fredoka, sans-serif" }}>
                            💼 Work Experience
                        </h3>
                        <div className="text-gray-100 mb-6 mt-2 text-sm font-thin leading-8 relative z-10">
                            <ul className="list-disc list-inside space-y-2">
                                <li> Completed multiple coding challenges and personal projects</li>
                                <li> Worked on personal projects to build a portfolio</li>
                                <li> Participated in hands-on learning through platforms like FreeCodeCamp and Scrimba</li>
                                <li>Built capstone project for diploma certification for Altschool</li>
                                <li>Contributed to open-source projects on GitHub [Lucide icons]</li>
                                <li>Collaborated with peers on Altschool Althub project as the lead frontend developer and assistant dev team lead</li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>

        </div>
        </motion.section>
    );
}