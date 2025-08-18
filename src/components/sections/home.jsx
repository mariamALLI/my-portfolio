export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-600 leading-right bg-clip-text text-transparent">
          Hi, I'm Mariam Alli
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          I'm a frontend engineer passionate about building beautiful and
          functional web applications. I enjoy learning new technologies, applying the use of AI in my projects,
          contributing to open-source projects, and am seeking a full-time frontend
          engineering position. Feel free to reach out!
        </p>

        <div className="flex justify-center space-x-4">
            <a
                href="#projects"
                className="bg-purple-700 text-white py-2 px-4 rounded font-medium transition duration-800 relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130, 246, 0.4)]"
            >
                View Projects
            </a>
            
            <a
                href="#contact"
                className="py-2 px-4 border border-purple-700/50 text-purple-600 rounded font-medium transition-all duration-800
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130, 246, 0.2)] hover:bg-purple-600/10"
            >
                Contact Me
            </a>

        </div>

        {/* <SocialLinks /> */}
        <div className="mt-8">
          <div className="flex justify-center space-x-4">
            <a href="https://x.com/mariam_oalli" target="_blank" rel="noopener noreferrer" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              <img src="./icons/twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://github.com/mariamALLI" target="_blank" rel="noopener noreferrer" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              <img src="./icons/github.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mariam-alli-a7964b21a/" target="_blank" rel="noopener noreferrer" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              <img src="./icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
