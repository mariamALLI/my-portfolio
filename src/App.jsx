import { LoadingScreen } from "./components/loadingScreen";
import { useState, useEffect } from "react";
import "./index.css";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/mobileMenu";
import { Home } from "/src/components/sections/home.jsx";
import { About } from "/src/components/sections/about.jsx";
import { Projects } from "/src/components/sections/projects";
import { Contact } from "/src/components/sections/contact";
import emailjs from "@emailjs/browser";

function App() {
 //track the loading state
  const [isLoading, setIsLoading] = useState(false);
  //state for menu
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(function() {
  // Add any side effects or data fetching logic here
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}, [])


  return (
    <>
   {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true) }/>}

    <div className={`min-h-screen transition-opacity duration-700 ease-in-out ${isLoading ? "opacity-100" : "opacity-0"}
    bg-black text-gray-100` 
  }>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default App
