import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Trophy } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/connect", label: "Connect" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold text-primary">
          Salman<span className="text-foreground">.</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com/salmanzebmalik" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/salmanzebmalik" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://www.kaggle.com/salmanzebmalik" target="_blank" rel="noreferrer" aria-label="Kaggle"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Trophy className="h-4 w-4" />
          </a>
          <div className="ml-2"><ThemeToggle /></div>
        </div>
      </div>
    </header>
  );
}
