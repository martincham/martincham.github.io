import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
/* Components */
import { ThemeProvider } from "@/components/theme-provider";
import { DarkSwitch } from "@/components/DarkSwitch.tsx";
import { Button } from "@/components/ui/button.tsx";
import Sidebar from "@/components/Sidebar.tsx";
/* Art */
import Home from "@/Home.tsx";
import Hubris from "@/pages/art/Hubris.tsx";
import Penance from "@/pages/art/Penance.tsx";
import BallForBouncing from "@/pages/art/BallForBouncing.tsx";
import Tofu from "@/pages/art/Tofu.tsx";
import ExitSign from "@/pages/art/ExitSign.tsx";
import CeilingTile from "@/pages/art/CeilingTile.tsx";
import WrinklingBoard from "@/pages/art/WrinklingBoard.tsx";
/* Dev */
import Nba from "@/pages/dev/NBA.tsx";
import HubrisDev from "@/pages/dev/HubrisDev.tsx";
import Websites from "@/pages/dev/Websites.tsx";
/* About */
import ArtistStatment from "@/pages/about/ArtistStatement.tsx";
import AboutMe from "@/pages/about/AboutMe.tsx";
import Resume from "@/pages/about/Resume.tsx";
import Teaching from "@/pages/about/Teaching.tsx";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <div className="md:p-8 p-2">
            <div className="md:h-auto md:items-start md:justify-start  md:pt-0">
              {/* Header Bar */}
              <div className=" top-0 z-30">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  {/* Title */}
                  <Link to="/">
                    <h1 className="md:text-4xl text-3xl hover:text-zinc-500 dark:color-green-600 font-light mt-12 md:mt-0">
                      Martin Chamberlin
                    </h1>
                  </Link>
                  {/* Buttons */}
                  <div className="flex justify-end space-x-2 ml-auto z-50">
                    {/* Mode Toggle */}
                    <div className="ml-auto z-50 flex items-center justify-center">
                      <DarkSwitch />
                    </div>
                    {/* Mobile Hamburger Menu */}
                    <Button
                      variant="outline"
                      className="ml-auto p-2 md:hidden bg-white dark:bg-black z-50"
                      onClick={toggleSidebar}
                      aria-label="Toggle sidebar"
                    >
                      <div>
                        <span
                          className={`block w-5 h-0.5 bg-black dark:bg-white mb-1 transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
                        ></span>
                        <span
                          className={`block w-5 h-0.5 bg-black dark:bg-white mb-1 transition-opacity ${isOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                          className={`block w-5 h-0.5 bg-black dark:bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                        ></span>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Overlay for Mobile */}
                {isOpen && (
                  <div
                    className="fixed inset-0 bg-zinc-900 opacity-50 md:hidden z-20"
                    onClick={toggleSidebar}
                  ></div>
                )}
              </div>
            </div>
          </div>
          {/* Sidebar and Content */}
          <div className="flex z-20 h-[calc(100vh-110px)]">
            {/* Sidebar Menu */}
            <div
              className={`z-40 p-2 fixed md:relative md:translate-x-0 top-0 right-0 md:left-0 h-full md:min-w-64 w-52 md:w-72 transition-all duration-200 ${
                isOpen
                  ? "z-40 translate-x-0 bg-gray-50 dark:bg-zinc-950 md:bg-transparent shadow-inner md:shadow-none"
                  : "z-40 translate-x-full duration-0 opacity-0 md:opacity-100"
              } md:flex md:flex-col overflow-y-auto`}
            >
              <div className="py-10 md:hidden"></div>
              <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
            </div>
            {/* Content */}
            <div className="flex-1 md:overflow-y-auto w-full max-w-screen-lg mx-auto p-0 md:p-4 z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hubris" element={<Hubris />} />
                <Route path="/penance" element={<Penance />} />
                <Route path="/ballforbouncing" element={<BallForBouncing />} />
                <Route path="/tofu" element={<Tofu />} />
                <Route path="/exitsign" element={<ExitSign />} />
                <Route path="/ceilingtile" element={<CeilingTile />} />
                <Route path="/wrinklingboard" element={<WrinklingBoard />} />

                <Route path="/nba" element={<Nba />} />
                <Route path="/websites" element={<Websites />} />
                <Route path="/hubrisdev" element={<HubrisDev />} />

                <Route path="/artist" element={<ArtistStatment />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/teaching" element={<Teaching />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
