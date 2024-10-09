/*import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/ui/list-item"; */
import { ModeToggle } from "@/components/mode-toggle";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Art Work</MenubarTrigger>
          <MenubarContent>
            <Link to="/hubris">
              <MenubarItem>
                Hubris <MenubarShortcut>2024</MenubarShortcut>
              </MenubarItem>
            </Link>
            <Link to="/penance">
              <MenubarItem>
                Penance <MenubarShortcut>2024</MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link to="/ballforbouncing">
              <MenubarItem>
                Ball for Bouncing <MenubarShortcut>2022</MenubarShortcut>
              </MenubarItem>
            </Link>
            <Link to="/tofu">
              <MenubarItem>
                Tofu <MenubarShortcut>2022</MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <MenubarItem>
              Print <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Dev Work</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Hubris Robotics<MenubarShortcut></MenubarShortcut>
            </MenubarItem>
            <MenubarItem>NBA Analytics</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Artist Statement <MenubarShortcut></MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Links</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* ModeToggle aligned to the right */}
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>

    /* <div>
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
    </div> */
  );
};

export default Navbar;
