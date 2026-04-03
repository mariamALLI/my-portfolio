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

const projects = [
  {
    title: 'Smart Shopping List App',
    badge: null,
    liveUrl: 'https://shoplistmaker.netlify.app/',
    githubUrl: 'https://github.com/mariamALLI/my-special-list-maker.git',
    image: './project-images/smart-shopping.png',
    description:
      'An intelligent shopping list application that helps users manage their purchases, track spending in real-time, and receive AI-powered item suggestions.',
    features: [
      'Real-time budget tracking that updates as items are marked as purchased',
      'AI-powered item suggestions based on user preferences',
      'Voice input functionality for adding items using microphone',
      'User authentication and data persistence with Supabase',
    ],
    stack: [
      { src: './icons/react.png', alt: 'React' },
      { src: './icons/supabase.png', alt: 'Supabase' },
      { src: './icons/vite.png', alt: 'Vite' },
      { src: './icons/shadcn.png', alt: 'shadcn/ui' },
      { src: './icons/tanstack.png', alt: 'TanStack Query' },
    ],
    challenges:
      'Integrating real-time budget tracking with Supabase, implementing AI-powered suggestions via a third-party API, and ensuring seamless voice input across different browsers and devices.',
    impact:
      'Provides users with better control over spending and simplifies shopping through automation and intelligent suggestions.',
    inDevelopment: false,
  },
  {
    title: 'Todo App with Authentication & API Integration',
    badge: null,
    liveUrl: 'https://nextjtodo.netlify.app/',
    githubUrl: 'https://github.com/mariamALLI/nextjs-todo.git',
    image: './project-images/react-todo.png',
    description:
      'A full-featured todo application with authentication, real-time data fetching, and developer-focused debugging insights.',
    features: [
      'User authentication with Google and GitHub using NextAuth',
      'Full CRUD functionality for managing tasks',
      'API-driven data fetching with TanStack Query',
      'Debug panel displaying authentication session data for development insights',
    ],
    stack: [
      { src: './icons/Next.js.png', alt: 'Next.js' },
      { src: './icons/tailwindcss.png', alt: 'Tailwind CSS' },
      { src: './icons/Bun.png', alt: 'Bun' },
      { src: './icons/tanstack.png', alt: 'TanStack Query' },
      { src: './icons/Material UI.png', alt: 'Material UI' },
    ],
    challenges:
      'Handling authentication flows and managing asynchronous API state efficiently across the application.',
    impact:
      'Demonstrates understanding of authentication systems, API integration, and modern Next.js frontend architecture.',
    inDevelopment: false,
  },
  {
    title: 'Space Tourism Website',
    badge: null,
    liveUrl: 'https://vue-space-toursm.netlify.app/',
    githubUrl: 'https://github.com/mariamALLI/vue-space-tourism.git',
    image: './project-images/space-tourism.png',
    description:
      'A multi-page space tourism website that delivers an immersive user experience through dynamic layouts, smooth navigation, and modern UI interactions.',
    features: [
      'Dynamic UI layout with responsive design across mobile, tablet, and desktop',
      'Seamless page navigation using Vue Router (Home, Destination, Crew, Technology)',
      'Interactive animations for enhanced user experience using @vueuse/motion',
      'Component-based architecture for scalable and reusable UI elements',
    ],
    stack: [
      { src: './icons/vue.jpeg', alt: 'Vue.js' },
      { src: './icons/tailwindcss.png', alt: 'Tailwind CSS' },
      { src: './icons/vite.png', alt: 'Vite' },
      { src: './icons/typescript.png', alt: 'TypeScript' },
      { src: './icons/framer-motion.png', alt: '@vueuse/motion' },
    ],
    challenges:
      'Managing dynamic linking and navigation within the same page while ensuring smooth transitions across routes — requiring careful handling of routing logic and component state.',
    impact:
      'Demonstrates strong understanding of Vue.js architecture, routing systems, and building visually engaging interfaces with smooth transitions.',
    inDevelopment: false,
  },
  {
    title: 'Movie Rating App',
    badge: '⚡ Full Stack',
    badgeColor: 'text-purple-300 bg-purple-400/10 border border-purple-400/40',
    liveUrl: 'https://movies-rating-app-sigma.vercel.app/',
    githubUrl: 'https://github.com/mariamALLI/movies-rating-app.git',
    image: './project-images/movie-rating.png',
    description:
      'A full-stack movie rating application built with Next.js and a serverless PostgreSQL database — stepping beyond frontend into full-stack development.',
    features: [
      'Movie search and dynamic data rendering from a serverless PostgreSQL database',
      'User ratings system (1–5 stars) with persistent data storage per user',
      'Authentication with Google and GitHub via NextAuth',
      'Server-side rendering with Next.js for optimal performance',
    ],
    stack: [
      { src: './icons/Next.js.png', alt: 'Next.js' },
      { src: './icons/typescript.png', alt: 'TypeScript' },
      { src: './icons/tailwindcss.png', alt: 'Tailwind CSS' },
    ],
    challenges:
      'Designing and managing a relational database schema with Prisma ORM while connecting it to a serverless Neon PostgreSQL instance — learning full-stack patterns beyond the UI layer.',
    impact:
      'Demonstrates initiative to grow beyond frontend — handling auth, database design, and server-side logic in a fully deployed, production application.',
    inDevelopment: false,
  },
]

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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {/* Project Image */}
              {project.image ? (
                <motion.img
                  className="h-70 md:h-100 mb-4"
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <div className="h-40 mb-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-2 border-cyan-500/20 flex items-center justify-center">
                  <p className="text-gray-500 text-sm italic">Live preview coming soon</p>
                </div>
              )}

              <div className="project-description">
                {/* Badge (Lead Dev / In Development) */}
                {project.badge && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                )}

                {/* Project title */}
                <h3 className="text-xl mb-2">{project.title}</h3>

                {/* Description */}
                <h4 className="text-yellow-200 text-xl pl-5">Description</h4>
                <p className="desc">{project.description}</p>

                {/* Key Features */}
                <h4 className="text-yellow-200 text-xl pl-5">🔧 Key Features:</h4>
                <motion.ul
                  className="project-features"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </motion.ul>

                {/* Tech Stack */}
                <h4 className="text-yellow-200 text-xl pl-5">🛠 Tech Stack:</h4>
                <div className="project-tech">
                  {project.stack.map((tech, i) => (
                    <span key={i}>
                      <img src={tech.src} alt={tech.alt} title={tech.alt} />
                    </span>
                  ))}
                </div>

                {/* Challenges */}
                <div className="project-challenges">
                  <h4 className="text-yellow-200 text-xl pl-5">🚧 Challenges:</h4>
                  <motion.p
                    className="desc"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {project.challenges}
                  </motion.p>
                </div>

                {/* Impact */}
                <div className="project-impact">
                  <h4 className="text-yellow-200 text-xl pl-5">📈 Impact:</h4>
                  <motion.p
                    className="desc"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {project.impact}
                  </motion.p>
                </div>

                {/* Links — fixed: no more nested <a> inside <a> */}
                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/40 text-pink-300 text-sm font-semibold hover:border-pink-400 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🌐 View Live
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 text-sm font-semibold hover:border-cyan-400 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img src="./icons/github.png" alt="GitHub" className="w-4 h-4" />
                      View on GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
