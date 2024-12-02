// src/components/Sidebar.tsx
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const artItems = [
  { name: "Hubris", date: "2024", href: "/hubris" },
  { name: "Penance", date: "2024", href: "/penance" },
  { name: "Wrinkling Board", date: "2023", href: "/wrinklingboard" },
  { name: "Exit Sign", date: "2022", href: "/exitsign" },
  { name: "Ceiling Tile", date: "2022", href: "/ceilingtile" },
  { name: "Ball for Bouncing", date: "2022", href: "/ballforbouncing" },
  { name: "Tofu", date: "2021", href: "/tofu" },
];

const devItems = [
  { name: "Hubris Robotics", date: "2024", href: "/hubrisdev" },
  { name: "NBA Analyzer", date: "'23-Present", href: "/nba" },
  { name: "Websites", date: "'16-Present", href: "/websites" },
];

const aboutItems = [
  { name: "About Me", date: "", href: "/about" },
  { name: "Artist Statement", date: "", href: "/artist" },
  { name: "Resume", date: "", href: "/resume" },
  { name: "Teaching", date: "", href: "/teaching" },
];

const sidebarItems = [
  { name: "Sculpture", items: artItems },
  { name: "Coding", items: devItems },
  { name: "Info", items: aboutItems },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between md:px-4 md:py-4">
      <Accordion type="multiple" className="w-full">
        {/* Art Projects */}
        {sidebarItems.map((sidebarItem, index) => (
          <AccordionItem value={"item-" + index} key={index}>
            <AccordionTrigger className="text-md ">
              {sidebarItem.name}
            </AccordionTrigger>
            <AccordionContent key={index} className="pl-2">
              {sidebarItem.items.map((item, index) => (
                <Link
                  to={item.href}
                  onClick={toggleSidebar}
                  key={index}
                  className=""
                >
                  <div
                    className=" hover:bg-zinc-200 dark:hover:bg-zinc-800 p-2 rounded justify-between flex"
                    key={index}
                  >
                    <div>{item.name}</div>
                    <div className="italic opacity-50">{item.date}</div>
                  </div>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
};

export default Sidebar;
