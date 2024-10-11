import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle.tsx";
import { Button } from "@/components/ui/button.tsx";
import Sidebar from "./components/Sidebar.tsx";

import Home from "@/Home.tsx";
import Hubris from "@/pages/art/Hubris.tsx";
import Penance from "@/pages/art/Penance.tsx";
import BallForBouncing from "@/pages/art/BallForBouncing.tsx";
import Tofu from "@/pages/art/Tofu.tsx";
import ExitSign from "@/pages/art/ExitSign.tsx";
import CeilingTile from "@/pages/art/CeilingTile.tsx";
import IroningBoard from "@/pages/art/IroningBoard.tsx";

import Nba from "@/pages/dev/NBA.tsx";
import HubrisDev from "@/pages/dev/HubrisDev.tsx";
import Websites from "@/pages/dev/Websites.tsx";

import ArtistStatment from "@/pages/about/ArtistStatement.tsx";
import AboutMe from "@/pages/about/AboutMe.tsx";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <div>
            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between">
                {/* Title */}
                <Link to="/">
                  <h1 className="text-2xl  hover:text-zinc-500 dark:color-green-600 ">
                    Martin Chamberlin
                  </h1>
                </Link>
                <div className="flex justify-end space-x-2">
                  {/* Mode Toggle */}
                  <div className="ml-auto z-50">
                    <ModeToggle />
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

                {/* Overlay for Mobile */}
                {isOpen && (
                  <div
                    className="fixed inset-0 bg-zinc-900 opacity-50 md:hidden z-40"
                    onClick={toggleSidebar}
                  ></div>
                )}
              </div>
            </div>
          </div>
          {/* Sidebar and Content */}
          <div className="flex z-30">
            {/* Sidebar Menu */}
            <div
              className={`fixed md:relative md:translate-x-0 top-0 right-0 h-full w-64 dark:w-72 transition-all duration-200 z-40 ${
                isOpen
                  ? "translate-x-0 bg-gray-50 dark:bg-zinc-950 md:bg-transparent"
                  : "translate-x-full duration-0 opacity-0 md:opacity-100"
              } md:flex md:flex-col`}
            >
              <div className="py-10 md:hidden"></div>
              <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
            </div>
            {/* Content */}
            <div className="flex w-full max-w-screen-lg mx-auto p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hubris" element={<Hubris />} />
                <Route path="/penance" element={<Penance />} />
                <Route path="/ballforbouncing" element={<BallForBouncing />} />
                <Route path="/tofu" element={<Tofu />} />
                <Route path="/nba" element={<Nba />} />
                <Route path="/hubrisdev" element={<HubrisDev />} />
                <Route path="/websites" element={<Websites />} />
                <Route path="/exitsign" element={<ExitSign />} />
                <Route path="/ceilingtile" element={<CeilingTile />} />
                <Route path="/ironingboard" element={<IroningBoard />} />
                <Route path="/artist" element={<ArtistStatment />} />
                <Route path="/about" element={<AboutMe />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
