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
  { name: "Ironing Board", date: "2023", href: "/ironingboard" },
  { name: "Exit Sign", date: "2022", href: "/exitsign" },
  { name: "Ceiling Tile", date: "2022", href: "/ceilingtile" },
  { name: "Ball for Bouncing", date: "2022", href: "/ballforbouncing" },
  { name: "Tofu", date: "2021", href: "/tofu" },
];

const devItems = [
  { name: "Hubris Robotics", date: "2024", href: "/hubris" },
  { name: "NBA Analyzer", date: "'23-Present", href: "/nba" },
  { name: "Websites", date: "'16-Present", href: "/websites" },
];

const sidebarItems = [
  { name: "Art Projects", items: artItems },
  { name: "Dev Projects", items: devItems },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="flex flex-col space-y-2">
      <Accordion type="multiple" collapsible className="w-full">
        {/* Art Projects */}
        {sidebarItems.map((sidebarItem, index) => (
          <AccordionItem value={"item-" + index} key={index}>
            <AccordionTrigger>{sidebarItem.name}</AccordionTrigger>
            {sidebarItem.items.map((item, index) => (
              <Link
                to={item.href}
                onClick={toggleSidebar}
                key={index}
                className="hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <AccordionContent
                  key={index}
                  className="rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
                >
                  <div className="justify-between flex" key={index}>
                    <div>{item.name}</div>
                    <div className="italic opacity-50">{item.date}</div>
                  </div>
                </AccordionContent>
              </Link>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
};

export default Sidebar;
