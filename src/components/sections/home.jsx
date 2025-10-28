import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
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
        className="text-center z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontFamily: "Fredoka, sans-serif" }}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
        >
          Hi, I'm Mariam Alli 👋
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg mb-8 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a frontend engineer passionate about building beautiful and
          functional web applications. I enjoy learning new technologies, applying the use of AI in my projects,
          contributing to open-source projects, and am seeking a full-time frontend
          engineering position. Feel free to reach out!
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-4 px-8 rounded-full font-bold text-lg relative overflow-hidden shadow-lg shadow-pink-500/50"
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
            className="py-4 px-8 border-4 border-yellow-400 text-yellow-300 rounded-full font-bold text-lg backdrop-blur-sm relative overflow-hidden"
            style={{ fontFamily: "Fredoka, sans-serif" }}
            whileHover={{ scale: 1.1, rotate: 2, borderColor: "#a855f7" }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative z-10">💬 Contact Me</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://x.com/mariam_oalli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border-3 border-pink-400/50 shadow-lg shadow-pink-500/30"
              whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
              whileTap={{ scale: 0.8 }}
            >
              <img src="./icons/twitter.png" alt="Twitter" className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://github.com/mariamALLI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-3 border-cyan-400/50 shadow-lg shadow-cyan-500/30"
              whileHover={{ scale: 1.3, rotate: -15, y: -5 }}
              whileTap={{ scale: 0.8 }}
            >
              <img src="./icons/github.png" alt="GitHub" className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mariam-alli-a7964b21a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border-3 border-yellow-400/50 shadow-lg shadow-yellow-500/30"
              whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
              whileTap={{ scale: 0.8 }}
            >
              <img src="./icons/linkedin.png" alt="LinkedIn" className="w-7 h-7" />
            </motion.a>
          </div>
        </motion.div>

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
