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
              className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400
              bg-clip-text text-transparent text-center"
              variants={fadeInUp}
            >
                About Me
            </motion.h2>

           <motion.div
             className="mb-8 rounded-xl p-8 border border-cyan-500/30 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm shadow-2xl relative overflow-hidden group"
             variants={fadeInUp}
             whileHover={{ y: -5 }}
             transition={{ duration: 0.3 }}
           >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-gray-300 text-[1.125rem] text-center leading-8 relative z-10">
            I specialize in front-end development, focusing on building responsive
            and user-friendly interfaces. My journey in web development started with a
            curiosity to understand how the web works, and it has since evolved
            into a full-fledged career. I enjoy working with modern technologies
            like React, Tailwind CSS, and JavaScript to bring my ideas to life.
              </p>
           </motion.div>

       
          
          <motion.div
            className="rounded-xl p-8 mb-8"
            variants={fadeInUp}
          >
            <div className="rounded-xl p-6">
                <h3 className="text-2xl text-center font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400
                bg-clip-text text-transparent">
                Frontend Skills
                </h3>
                <motion.div
                  className="flex flex-wrap justify-center gap-3"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                    {frontendSkil.map((skill, index) => (
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
                            <i className={`devicon-${skill.icon}-plain text-xl mr-2 text-cyan-400`}></i>
                            <span className="bg-cyan-600/10 text-cyan-300 py-2 px-4 rounded-full text-sm border border-cyan-500/30
                            hover:bg-cyan-600/20 hover:shadow-[0_2px_12px_rgba(34,211,238,0.3)] transition-all">{skill.name}</span>
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
                      className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm shadow-xl relative overflow-hidden group"
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h3 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                            Education
                        </h3>
                        <ul className="relative z-10">
                            <li><strong>Diploma in Software Engineering (Frontend)</strong> - AltSchool Africa (2024/25)</li>
                            <p className="text-gray-300 mb-6 mt-2 text-sm leading-6">
                               <em> Relevant courses:</em>
                               <span className="text-cyan-300"> HTML, CSS, and JavaScript,React, TypeScript, Git and GitHub,Responsive Web Design, UI/UX Design Principles, Agile Methodologies, Web Accessibility, Testing and Debugging, Deployment and Hosting, API Integration, Performance Optimization, Cross-Browser Compatibility, Progressive Web Apps (PWAs), Web Security Best Practices</span>
                            </p>

                            <li><strong>Certificate in Web Development</strong> - FreeCodeCamp (2023)</li>
                        </ul>
                    </motion.div>

                    <motion.div
                      className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm shadow-xl relative overflow-hidden group"
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h3 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                            Work Experience
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