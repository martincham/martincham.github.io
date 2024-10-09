import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

/* import Navbar from "./components/Navbar.tsx"; */
import Home from "@/Home.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Hubris from "@/pages/art/Hubris.tsx";
import Penance from "@/pages/art/Penance.tsx";
import BallForBouncing from "@/pages/art/BallForBouncing.tsx";
import Tofu from "@/pages/art/Tofu.tsx";
import { ModeToggle } from "@/components/ModeToggle.tsx";
import { Button } from "@/components/ui/button.tsx";

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
                  <h1 className="text-2xl font-bold hover:text-zinc-500 ">
                    Martin Chamberlin
                  </h1>
                </Link>
                <div className="flex justify-end space-x-2">
                  {/* Mode Toggle */}
                  <div className="ml-auto">
                    <ModeToggle />
                  </div>
                  {/* Mobile Hamburger Menu */}
                  <Button
                    variant="outline"
                    className="ml-auto p-2 md:hidden bg-white dark:bg-black"
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
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={toggleSidebar}
                  ></div>
                )}
              </div>
            </div>
          </div>
          {/* Sidebar and Content */}
          <div className="flex">
            {/* Sidebar Menu */}
            <div
              className={`fixed md:relative md:translate-x-0 top-0 left-0 h-full w-64  transition-all duration-200  ${
                isOpen
                  ? "translate-x-0 bg-gray-50 dark:bg-zinc-950"
                  : "-translate-x-full "
              } md:flex md:flex-col`}
            >
              <br className="text-xl font-semibold mb-4 md:hidden"></br>
              <Sidebar />
            </div>
            {/* Content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hubris" element={<Hubris />} />
              <Route path="/penance" element={<Penance />} />
              <Route path="/ballforbouncing" element={<BallForBouncing />} />
              <Route path="/tofu" element={<Tofu />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
