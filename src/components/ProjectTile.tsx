import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectTile({ project, size = "md" }: { project: Project; size?: "sm" | "md" | "lg" }) {
  const h = size === "lg" ? "h-[420px]" : size === "sm" ? "min-h-[220px]" : "h-72";
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={`card-hover group relative block overflow-hidden rounded-2xl border border-border bg-card ${h}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_oklch(0.72_0.18_42_/_0.18),_transparent_60%)]" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
            {project.tag}
          </span>
          <ArrowUpRight className="h-5 w-5 text-foreground/70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <div className="mt-4">
          <h3 className={`font-display font-bold leading-tight text-foreground line-clamp-2 ${size === "lg" ? "text-3xl md:text-4xl" : size === "sm" ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}>
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">{project.subtitle}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 group-hover:underline">
            View Case Study →
          </span>
        </div>
      </div>
    </Link>
  );
}
