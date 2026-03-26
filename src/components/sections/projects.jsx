import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-20 px-6 max-w-6xl mx-auto space-y-10">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent text-center"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          🎨 My Projects
        </motion.h2>
        <motion.div
          className="project-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl">Smart Shopping List App </h2>
          <a href="https://shoplistmaker.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="project-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                // style={{
                //   backgroundImage: "url('./project-images/smart-shopping.png')",
                // }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img
                className="h-70 md:h-100"
                src="./project-images/smart-shopping.png"
              ></motion.img>
              <div className="project-description">
                {/* project description */}
                <h4 className="text-yellow-200 text-xl pl-5">Description</h4>
                <p className="desc">
                  An intelligent shopping list application that helps users manage their purchases,
                  track spending in real-time, and receive AI-powered item suggestions.
                </p>

                {/*Project key features */}
                <h4 className="text-yellow-200 text-xl pl-5">🔧Key features:</h4>
                <motion.ul
                  className="project-features "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <li>Real-time budget tracking that updates as items are marked as purchased</li>
                  <li>AI-powered item suggestions based on user preferences.</li>
                  <li>Voice input functionality for adding items using microphone</li>
                  <li>User authentication and data persistence with Supabase</li>
                </motion.ul>

                {/*Tech stack */}
                <h4 className="text-yellow-200 text-xl pl-5">🛠Tech Stack:</h4>
                <div className="project-tech">
                  <span>
                    <img src="./icons/react.png" alt="react icon" />
                  </span>
                  <span>
                    <img src="./icons/supabase.png" alt="supabase icon" />
                  </span>
                  <span>
                    <img src="./icons/vite.png" alt="vite icon" />
                  </span>
                  <span>
                    <img src="./icons/shadcn.png" alt="shadcn icon" />
                  </span>
                  <span>
                    <img src="./icons/tanstack.png" alt="tanstack icon" />
                  </span>
                </div>

                {/* challenges */}
                <div className="project-challenges">
                  <h4 className="text-yellow-200 text-xl pl-5">🚧 Challenges:</h4>
                  <motion.ul
                    className="project-features "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <li>
                      Integrating real-time budget tracking with Supabase's real-time capabilities.
                    </li>
                    <li>Implementing AI-powered item suggestions using a third-party API.</li>
                    <li>
                      Ensuring seamless voice input functionality across different browsers and
                      devices.
                    </li>
                  </motion.ul>
                </div>

                {/* Impact of Project */}
                <div className="project-impact">
                  <h4 className="text-yellow-200 text-xl pl-5">📈 Impact:</h4>
                  <motion.p
                    className="desc"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Provides users with better control over spending and simplifies shopping through
                    automation and intelligent suggestions.
                  </motion.p>
                </div>
              </div>
            </motion.div>
            <span>
              <a
                href="https://github.com/mariamALLI/my-special-list-maker.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 mt-4 text-md text-gray-300 hover:text-gray-100 transition-colors duration-200"
              >
                <img src="./icons/github.png" alt="github icon" />
                <p>Click Github Repository</p>
              </a>
            </span>
          </a>

          <a href="https://nextjtodo.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="project-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                style={{
                  backgroundImage: "url('./project-images/react-todo.png')",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <h3>Todo App</h3>
              <p>
                A sleek todo app built with Nextjs, featuring real-time task updates, authentication
                and a clean user interface.
              </p>
              <div className="project-tech">
                <span>
                  <img src="./icons/Next.js.png" alt="react icon" />
                </span>
                <span>
                  <img src="./icons/tailwindcss.png" alt="tailwind icon" />
                </span>
                <span>
                  <img src="./icons/Bun.png" alt="bun icon" />
                </span>
                <span>
                  <img src="./icons/tanstack.png" alt="tanstack icon" />
                </span>
                <span>
                  <img src="./icons/Material UI.png" alt="materialui icon" />
                </span>
              </div>
            </motion.div>
            <span>
              <a
                href="https://github.com/mariamALLI/nextjs-todo.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 mt-4 text-md text-gray-300 hover:text-gray-100 transition-colors duration-200"
              >
                <img src="./icons/github.png" alt="github icon" />
                <p>Click Github Repository</p>
              </a>
            </span>
          </a>

          <a href="https://vue-space-toursm.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="project-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                style={{
                  backgroundImage: "url('./project-images/space-tourism.png')",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <h3>Space Tourism</h3>
              <p>
                A visually stunning space tourism website showcasing various intergalactic travel
                packages.
              </p>
              <div className="project-tech">
                <span>
                  <img src="./icons/vue.jpeg" alt="react icon" />
                </span>
                <span>
                  <img src="./icons/tailwindcss.png" alt="tailwind icon" />
                </span>
                <span>
                  <img src="./icons/vite.png" alt="vite icon" />
                </span>
                <span>
                  <img src="./icons/typescript.png" alt="typescript icon" />
                </span>
                <span>
                  <img src="./icons/framer-motion.png" alt="vueuse-motion" />
                </span>
              </div>
            </motion.div>
            <span>
              <a
                href="https://github.com/mariamALLI/vue-space-tourism.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 mt-4 text-md text-gray-300 hover:text-gray-100 transition-colors duration-200"
              >
                <img src="./icons/github.png" alt="github icon" />
                <p>Click Github Repository</p>
              </a>
            </span>
          </a>

          <a href="https://instaspot.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="project-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                style={{
                  backgroundImage: "url('./project-images/instaspot2.png')",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <h3>Instaspot</h3>
              <p>
                A photo-sharing app that allows users to capture and share their moments in an
                instant.
              </p>
              <div className="project-tech">
                <span>
                  <img src="./icons/react.png" alt="react icon" />
                </span>
                <span>
                  <img src="./icons/typescript.png" alt="typescript icon" />
                </span>
                <span>
                  <img src="./icons/css3.png" alt="css icon" />
                </span>
                <span>
                  <img src="./icons/vite.png" alt="vite icon" />
                </span>
              </div>
            </motion.div>
            <span>
              <a
                href="https://github.com/mariamALLI/react-instaSpot.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 mt-4 text-md text-gray-300 hover:text-gray-100 transition-colors duration-200"
              >
                <img src="./icons/github.png" alt="github icon" />
                <p>Click Github Repository</p>
              </a>
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
