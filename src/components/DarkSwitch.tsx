"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const DarkSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        " object-center peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-1 border-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background  data-[state=checked]:bg-primary-foreground data-[state=unchecked]:border-black data-[state=unchecked]:bg-input",
        className,
      )}
      onClick={handleToggle}
      {...props}
      ref={ref}
      data-state={isDark ? "checked" : "unchecked"}
    >
      <span
        className={cn(
          "-left-4 relative inline-block h-4 w-4 transition-transform duration-300",
          isDark ? "translate-x-4" : "translate-x-0",
        )}
      >
        <Sun
          className={cn(
            "absolute h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-opacity duration-300",
            isDark ? "opacity-0" : "opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-opacity duration-300",
            isDark ? "opacity-100" : "opacity-0",
          )}
        />
      </span>
    </SwitchPrimitives.Root>
  );
});

DarkSwitch.displayName = SwitchPrimitives.Root.displayName;

export { DarkSwitch };
