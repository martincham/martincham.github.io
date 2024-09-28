import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "./components/Navbar.tsx";

import Hubris from "@/pages/Hubris.tsx";
import Penance from "@/pages/Penance.tsx";
import BallForBouncing from "@/pages/BallForBouncing.tsx";
import Tofu from "@/pages/Tofu.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <h1>Martin Chamberlin</h1>

          <Navbar />

          <Routes>
            <Route path="/" element={<Hubris />} />
            <Route path="/hubris" element={<Hubris />} />
            <Route path="/penance" element={<Penance />} />
            <Route path="/ballforbouncing" element={<BallForBouncing />} />
            <Route path="/tofu" element={<Tofu />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
