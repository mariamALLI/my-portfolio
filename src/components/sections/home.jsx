import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-evenly relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-900/30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="z-10 px-4 md:px-8 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left Side - Avatar */}
          <motion.div
            className="flex justify-center md:justify-evenly"
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Animated border rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-pink-400/60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-4 border-cyan-400/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Main avatar */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50 overflow-hidden">
                  <img
                    src="src/assets/mariamalli.png"
                    alt="Mariam Alli Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating decorative elements */}
                {/* <motion.div
                  className="absolute -top-6 -right-6 text-5xl"
                  animate={{ y: [0, -15, 0], rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ⭐
                </motion.div> */}
                <motion.div
                  className="absolute -bottom-6 -left-6 text-5xl"
                  animate={{ y: [0, 15, 0], rotate: [0, -20, 20, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="flex flex-col justify-center px-4 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <motion.h1
              className="text-5xl text-center md:text-left md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ fontFamily: "Aladin, system-ui" }}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 200
              }}
            >
              Hi, I'm Mariam Alli 👋
            </motion.h1>

            <motion.p
              className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I'm a frontend engineer passionate about building beautiful and
              functional web applications. I enjoy learning new technologies, applying the use of AI in my projects,
              contributing to open-source projects, and am seeking a full-time frontend
              engineering position. Feel free to reach out!
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#projects"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-4 px-8 rounded-full font-bold text-lg relative overflow-hidden shadow-lg shadow-pink-500/50 text-center"
                style={{ fontFamily: "Fredoka, sans-serif" }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(236, 72, 153, 0.5)",
                    "0 10px 30px rgba(168, 85, 247, 0.5)",
                    "0 10px 30px rgba(6, 182, 212, 0.5)",
                    "0 10px 30px rgba(236, 72, 153, 0.5)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <span className="relative z-10">✨ View Projects</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="py-4 px-8 border-4 border-yellow-400 text-yellow-300 rounded-full font-bold text-lg backdrop-blur-sm relative overflow-hidden text-center"
                style={{ fontFamily: "Fredoka, sans-serif" }}
                whileHover={{ scale: 1.1, rotate: 2, borderColor: "#a855f7" }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="relative z-10">💬 Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="https://x.com/mariam_oalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border-3 border-pink-400/50 shadow-lg shadow-pink-500/30"
                whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
                whileTap={{ scale: 0.8 }}
              >
                <img src="./icons/twitter.png" alt="Twitter" className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/mariamALLI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-3 border-cyan-400/50 shadow-lg shadow-cyan-500/30"
                whileHover={{ scale: 1.3, rotate: -15, y: -5 }}
                whileTap={{ scale: 0.8 }}
              >
                <img src="./icons/github.png" alt="GitHub" className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mariam-alli-a7964b21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border-3 border-yellow-400/50 shadow-lg shadow-yellow-500/30"
                whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
                whileTap={{ scale: 0.8 }}
              >
                <img src="./icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-5xl">
            👇
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
