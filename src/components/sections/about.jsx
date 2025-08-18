export const About = () => {
const frontendSkil = [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Figma", icon: "figma" },
    { name: "Canva", icon: "canva" },
    { name: "Vue", icon: "vue" },
    { name: "Netlify", icon: "netlify" }
]

    return (
 
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
        <div className="max-w-3xl max-auto px-4">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-pink-600 
            bg-clip-text text-transparent text-center">
                About Me
                </h2>

           <div className="mb-6 rounded-xl p-8 border-purple-500/30 border shadow-xl/30 hover:-translate-y-1 transition-all duration-500">
              <p className="text-gray-300 mb-6 text-[1.125rem] text-center leading-8">
            I specialize in front-end development, focusing on building responsive
            and user-friendly interfaces. My journey in web development started with a
            curiosity to understand how the web works, and it has since evolved
            into a full-fledged career. I enjoy working with modern technologies
            like React, Tailwind CSS, and JavaScript to bring my ideas to life.
            </p>
           </div>

       
          
          <div className=" rounded-xl p-8 mb-6 hover:-translate-y-1 transition-all">
            <div className="rounded-xl p-6 b hover:-translate-y-1 transition-all">
                <h3 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600
                bg-clip-text text-transparent">
                Frontend Skills
                    
                </h3>
                <div className="flex flex-wrap ml-[2rem] mr-[2rem]">
                    {frontendSkil.map((skill) => (
                        <div
                            key={skill.name}
                            className="items-center p-2 rounded-lg"
                        >
                            <i className={`devicon-${skill.icon}-plain text-xl mr-2 text-purple-500`}></i>
                            <span className="bg-purple-600/10 text-purple-400 py-1 px-3 rounded-full text-xm hover:bg-purple-600/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all">{skill.name}</span>
                        </div>
                    ))}

                </div>
            </div>
          </div>
          

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-purple-500/30 shadow-xl/30 border hover:-translate-y-1 transition-all">
                         <h3 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                            Education 
                        </h3>
                        <ul>
                            <li><strong>Diploma in Software Engineering (Frontend)</strong> - AltSchool Africa (2024/25)</li>
                            <p className="text-gray-300 mb-6 mt-2 text-sm leading-6">
                               <em> Relevant courses:</em>
                               <span className="text-purple-300"> HTML, CSS, and JavaScript,React, TypeScript, Git and GitHub,Responsive Web Design, UI/UX Design Principles, Agile Methodologies, Web Accessibility, Testing and Debugging, Deployment and Hosting, API Integration, Performance Optimization, Cross-Browser Compatibility, Progressive Web Apps (PWAs), Web Security Best Practices</span>
                            </p>
                
                            <li><strong>Certificate in Web Development</strong> - FreeCodeCamp (2023)</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-purple-500/30 shadow-xl/30 border hover:-translate-y-1 transition-all">
                         <h3 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                            Work Experience 
                        </h3>
                        <div className="text-gray-100 mb-6 mt-2 text-sm font-thin leading-8">
                            <ul className="list-disc list-inside">
                                <li> Completed multiple coding challenges and personal projects</li>                            
                                <li> Worked on personal projects to build a portfolio</li>
                                <li> Participated in hands-on learning through platforms like FreeCodeCamp and Scrimba</li>
                                <li>Built capstone project for diploma certification for Altschool</li>
                                <li>Contributed to open-source projects on GitHub [Lucide icons]</li>
                                <li>Collaborated with peers on Altschool Althub project as the lead frontend developer and assistant dev team lead</li>
                            </ul>
 

                        </div>
                    </div>
                </div>

        </div>   
        </section>
    );
}