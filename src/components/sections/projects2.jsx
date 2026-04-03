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
          {/* Smart Shopping List Project */}
          <a href="https://shoplistmaker.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="project-card card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img
                className="h-70 md:h-100"
                src="./project-images/smart-shopping.png"
              ></motion.img>
              <div className="project-description">
                {/* Project title */}
                <h3 className="text-xl">Smart Shopping List App </h3>
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

          {/* Todo Project */}
          <a href="https://nextjtodo.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="project-card card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img
                className="h-70 md:h-100 mb-4"
                src="./project-images/react-todo.png"
              ></motion.img>
              <div>
                {/* Project title */}
                <h3 className="text-xl"> Todo App with Authentication & API Integration </h3>
                {/* project description */}
                <h4 className="text-yellow-200 text-xl pl-5">Description</h4>
                <p>
                  A full-featured todo application with authentication, real-time data fetching, and
                  developer-focused debugging insights.
                </p>
                {/* Project features */}
                <h4 className="text-yellow-200 text-xl pl-5">🔧Key features:</h4>
                <motion.ul
                  className="project-features "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <li>User authentication with Google and GitHub using NextAuth.</li>
                  <li>Full CRUD functionality for managing tasks.</li>
                  <li>API-driven data fetching with TanStack Query.</li>
                  <li>
                    Debug panel displaying authentication session data for development insights.
                  </li>
                </motion.ul>

                {/* Tech stack */}
                <h4 className="text-yellow-200 text-xl pl-5">🛠Tech Stack:</h4>
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

                {/* Challenges */}
                <div className="project-challenges">
                  <h4 className="text-yellow-200 text-xl pl-5">🚧 Challenges:</h4>
                  <motion.p
                    className="project-features "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Handling authentication flows and managing asynchronous API state efficiently
                    across the application.
                  </motion.p>
                </div>

                {/* Impact of project */}
                <div className="project-impact">
                  <h4 className="text-yellow-200 text-xl pl-5">📈 Impact:</h4>
                  <motion.p
                    className="desc"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Demonstrates understanding of authentication systems, API integration, and
                    modern frontend architecture.
                  </motion.p>
                </div>
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

          {/* Space Tourism Project */}
          <a href="https://vue-space-toursm.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="project-card card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img
                className="h-70 md:h-100 mb-4"
                src="./project-images/space-tourism.png"
              ></motion.img>

              <div>
                {/* Project title */}
                <h3 className="text-xl"> Space Tourism Website (Vue.js Project)</h3>
                {/* project description */}
                <h4 className="text-yellow-200 text-xl pl-5">Description</h4>
                <p>
                  A multi-page space tourism website that delivers an immersive user experience
                  through dynamic layouts, smooth navigation, and modern UI interactions.
                </p>
                {/* Project features */}
                <h4 className="text-yellow-200 text-xl pl-5">🔧Key features:</h4>
                <motion.ul
                  className="project-features "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <li>
                    Dynamic UI layout with responsive design across mobile, tablet, and desktop.
                  </li>
                  <li>
                    Seamless page navigation using Vue Router (Home, Destination, Crew, Technology).
                  </li>
                  <li>Interactive animations for enhanced user experience using Framer Motion.</li>
                  <li>Component-based architecture for scalable and reusable UI elements.</li>
                </motion.ul>

                {/* Tech Stack */}
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
                {/* Challenges */}
                <div className="project-challenges">
                  <h4 className="text-yellow-200 text-xl pl-5">🚧 Challenges:</h4>
                  <motion.p
                    className="project-features "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Managing dynamic linking and navigation within the same page while ensuring
                    smooth transitions across routes. This required careful handling of routing
                    logic and component state to maintain consistency in the user experience.
                  </motion.p>
                </div>

                {/* Impact of project */}
                <div className="project-impact">
                  <h4 className="text-yellow-200 text-xl pl-5">📈 Impact:</h4>
                  <motion.p
                    className="project-features "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Demonstrates strong understanding of modern frontend architecture, routing
                    systems, and building visually engaging interfaces with smooth transitions.
                  </motion.p>
                </div>
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
        </motion.div>
      </div>
    </motion.section>
  )
}
