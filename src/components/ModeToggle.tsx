"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`w-5 h-5 text-yellow-500 ${isDark ? "opacity-50" : ""}`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={handleToggle}
        className="relative"
      />
      <Moon className={`w-5 h-5 text-blue-500 ${isDark ? "" : "opacity-50"}`} />
    </div>
  );
}
