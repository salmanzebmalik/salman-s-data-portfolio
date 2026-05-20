import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-2 py-1 transition-colors hover:border-primary"
    >
      <Sun className="h-4 w-4 text-primary" />
      <span className={`relative h-5 w-9 rounded-full transition-colors ${isDark ? "bg-muted" : "bg-muted"}`}>
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-primary transition-all ${isDark ? "left-[18px]" : "left-0.5"}`}
        />
      </span>
      <Moon className="h-4 w-4 text-primary" />
    </button>
  );
}
