import { LoadingScreen } from "./components/loadingScreen";
import { useState } from "react";
import "./index.css";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/mobileMenu";
import { Home } from "/src/components/sections/home.jsx";
import { About } from "/src/components/sections/about.jsx";
import { Projects } from "/src/components/sections/projects";

function App() {
 //track the loading state
  const [isLoading, setIsLoading] = useState(false);
  //state for menu
  const [menuOpen, setMenuOpen] = useState(false);

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
    </div>
    </>
  )
}

export default App
