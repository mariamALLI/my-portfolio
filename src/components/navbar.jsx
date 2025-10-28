import { useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


    return (
        <motion.nav
          className="fixed top-0 w-full z-40 bg-[rgba(26,11,46,0.8)] backdrop-blur-xl border-b-4 border-pink-500/30 shadow-lg shadow-pink-500/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", type: "spring" }}
        >
            <div className="flex justify-between items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.a
                  href="#home"
                  className="font-bold text-2xl text-gray-100 py-4"
                  style={{ fontFamily: "Fredoka, sans-serif" }}
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                    mariam<span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">.alli</span>
                </motion.a>

                <div className="hamburger-menu w-7 h-5 relative cursor-pointer z-40 md:hidden ml-auto" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <motion.a
                      href="#home"
                      className="text-gray-300 hover:text-pink-400 transition-colors relative py-2 font-semibold
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-1
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-pink-400
                      after:to-cyan-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      after:rounded-full
                      hover:after:scale-x-100"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                        Home
                    </motion.a>
                    <motion.a
                      href="#about"
                      className="text-gray-300 hover:text-yellow-400 transition-colors relative py-2 font-semibold
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-1
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-yellow-400
                      after:to-pink-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      after:rounded-full
                      hover:after:scale-x-100"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                        About
                    </motion.a>
                    <motion.a
                      href="#projects"
                      className="text-gray-300 hover:text-purple-400 transition-colors relative py-2 font-semibold
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-1
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-purple-400
                      after:to-cyan-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      after:rounded-full
                      hover:after:scale-x-100"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                        Projects
                    </motion.a>
                    <motion.a
                      href="#contact"
                      className="text-gray-300 hover:text-cyan-400 transition-colors relative py-2 font-semibold
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-1
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-cyan-400
                      after:to-pink-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      after:rounded-full
                      hover:after:scale-x-100"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                        Contact
                    </motion.a>

                    </div>

            </div>
        </motion.nav>
    )
}