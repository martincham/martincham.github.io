import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/ui/list-item";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Art Work</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/hubris" title="Hubris">
                  2024
                </ListItem>
                <ListItem href="/penance" title="Penance">
                  2024
                </ListItem>
                <ListItem href="/ballforbouncing" title="Ball for Bouncing">
                  2024
                </ListItem>
                <ListItem href="/Tof" title="Tofu">
                  2024
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dev Work</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/hubris" title="Hubris Robotics">
                  2024
                </ListItem>
                <ListItem href="/penance" title="NBA Analytics">
                  2023-Current
                </ListItem>
                <ListItem href="/ballforbouncing" title="Ball for Bouncing">
                  2024
                </ListItem>
                <ListItem href="/Tof" title="Tofu">
                  2024
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="ml-1 ">
          <ModeToggle />
        </div>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
