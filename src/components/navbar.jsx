import { useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


    return (
        <motion.nav
          className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border-b border-cyan-500/20"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex justify-between items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.a
                  href="#home"
                  className="font-bold text-xl text-gray-100 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                    mariam<span className="text-cyan-400">.alli</span>
                </motion.a>

                <div className="hamburger-menu w-7 h-5 relative cursor-pointer z-40 md:hidden ml-auto" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <motion.a
                      href="#home"
                      className="text-gray-300 hover:text-cyan-400 transition-colors relative py-2
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-0.5
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-cyan-400
                      after:to-blue-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      hover:after:scale-x-100"
                      whileHover={{ y: -2 }}
                    >
                        Home
                    </motion.a>
                    <motion.a
                      href="#about"
                      className="text-gray-300 hover:text-cyan-400 transition-colors relative py-2
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-0.5
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-cyan-400
                      after:to-blue-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      hover:after:scale-x-100"
                      whileHover={{ y: -2 }}
                    >
                        About
                    </motion.a>
                    <motion.a
                      href="#projects"
                      className="text-gray-300 hover:text-cyan-400 transition-colors relative py-2
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-0.5
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-cyan-400
                      after:to-blue-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      hover:after:scale-x-100"
                      whileHover={{ y: -2 }}
                    >
                        Projects
                    </motion.a>
                    <motion.a
                      href="#contact"
                      className="text-gray-300 hover:text-cyan-400 transition-colors relative py-2
                      after:content-['']
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-0.5
                      after:w-full
                      after:bg-gradient-to-r
                      after:from-cyan-400
                      after:to-blue-400
                      after:scale-x-0
                      after:transition-transform
                      after:origin-left
                      hover:after:scale-x-100"
                      whileHover={{ y: -2 }}
                    >
                        Contact
                    </motion.a>

                    </div>

            </div>
        </motion.nav>
    )
}