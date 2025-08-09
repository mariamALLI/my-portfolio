export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    return (
        // the styling is dependent on the menuOpen state
        // when menuOpen is true, the menu should be visible and take up the full screen
        // when menuOpen is false, the menu should be hidden and take up no space
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
        transition-all duration-1000 ease-in-out
         ${menuOpen ? 'h-screen opacity-100 pointer-event-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
            

            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right- text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close menu">
                &times;
            </button>


            <a href="#home" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-500
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Home
            </a>   

            <a href="#about" 
            onClick={() => setMenuOpen(false)}
             className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-500
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                About
            </a>

            <a href="#projects" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-500
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Projects
            </a>

            <a href="#contact" 
            onClick={() => setMenuOpen(false)}
            className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-500
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Contact
            </a>
        </div>
    )
}