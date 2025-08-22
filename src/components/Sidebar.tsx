// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { Accordion } from "@/components/ui/accordion";

const artItems = [
  { name: "Hubris", date: "2024", href: "/hubris" },
  { name: "Penance", date: "2024", href: "/penance" },
  { name: "Wrinkling Board", date: "2023", href: "/wrinklingboard" },
  { name: "Exit Sign", date: "2022", href: "/exitsign" },
  { name: "Ceiling Tile", date: "2022", href: "/ceilingtile" },
  { name: "Ball for Bouncing", date: "2022", href: "/ballforbouncing" },
  { name: "Tofu", date: "2021", href: "/tofu" },
  { name: "Archive", date: "", href: "/archive" },
];

// const devItems = [
//  { name: "Hubris Robotics", date: "2024", href: "/hubrisdev" },
//  { name: "NBA Analyzer", date: "'23-Present", href: "/nba" },
//  { name: "Websites", date: "'16-Present", href: "/websites" },
//];

const aboutItems = [
  { name: "About Me", date: "", href: "/about" },
  { name: "Artist Statement", date: "", href: "/artist" },
  { name: "Resume", date: "", href: "/resume" },
];

const sidebarItems = [
  { name: "Sculpture", items: artItems },
  // { name: "Coding", items: devItems },
  { name: "Info", items: aboutItems },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="text-sm flex flex-col md:flex-row md:items-center md:justify-between md:px-4 md:py-4">
      <Accordion type="multiple" className="w-full">
        {/* Art Projects */}
        {sidebarItems.map((sidebarItem, index) => (
          <div key={index} className="pl-2 pb-4">
            {sidebarItem.items.map((item, jindex) => (
              <NavLink
                key={jindex}
                to={item.href}
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `flex justify-between items-center p-2 rounded text-md hover:bg-zinc-300 dark:hover:bg-zinc-700 ${
                    isActive ? "bg-zinc-100 dark:bg-zinc-800" : ""
                  }`
                }
              >
                <div className="">{item.name}</div>
                <div className="italic opacity-50">{item.date}</div>
              </NavLink>
            ))}
          </div>
        ))}
      </Accordion>
    </nav>
  );
};

export default Sidebar;
