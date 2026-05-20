import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <footer className="border-t border-border/60 py-8">
        <div className="section-container flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Muhammad Salman Malik</p>
          <p>Data Engineer · ML Engineer</p>
        </div>
      </footer>
    </div>
  );
}
