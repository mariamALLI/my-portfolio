import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    // useEffect 
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);


    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.5)] backdrop-blur-lg">
            <div className="flex justify-between items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <a href="#home" className="font-bold text-xl text-gray-100">
                    mariam<span className="text-purple-600">.alli</span>
                </a>

                <div className="hamburger-menu w-7 h-5 relative cursor-pointer z-40 md:hidden ml-auto" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 transition delay-150 duration-300 ease-in-out hover:text-purple-600 transition-colors relative
                    transition-colors
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:bottom-[-1rem]
                    after:h-1
                    after:w-full
                    after:bg-purple-600
                    after:scale-x-0
                    after:transition-transform
                    after:origin-left
                    hover:after:scale-x-100">
                        Home
                    </a>
                    <a href="#about"  className="text-gray-300 transition delay-150 duration-300 ease-in-out hover:text-purple-600 transition-colors relative
                    transition-colors
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:bottom-[-1rem]
                    after:h-1
                    after:w-full
                    after:bg-purple-600
                    after:scale-x-0
                    after:transition-transform
                    after:origin-left
                    hover:after:scale-x-100">
                        About
                    </a>
                    <a href="#projects"  className="text-gray-300 transition delay-150 duration-300 ease-in-out hover:text-purple-600 transition-colors relative
                    transition-colors
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:bottom-[-1rem]
                    after:h-1
                    after:w-full
                    after:bg-purple-600
                    after:scale-x-0
                    after:transition-transform
                    after:origin-left
                    hover:after:scale-x-100">
                        Projects
                    </a>
                    <a href="#contact"  className="text-gray-300 transition delay-150 duration-300 ease-in-out hover:text-purple-600 transition-colors relative
                    transition-colors
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:bottom-[-1rem]
                    after:h-1
                    after:w-full
                    after:bg-purple-600
                    after:scale-x-0
                    after:transition-transform
                    after:origin-left
                    hover:after:scale-x-100">
                        Contact
                    </a>
                    
                    </div>

            </div>
        </nav>
    )
}