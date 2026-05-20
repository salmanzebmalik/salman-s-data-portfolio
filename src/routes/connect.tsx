import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, Trophy } from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — Muhammad Salman Malik" },
      { name: "description", content: "Get in touch with Muhammad Salman Malik." },
    ],
  }),
  component: ConnectPage,
});

function ConnectPage() {
  return (
    <Layout>
      <section className="bg-background py-24">
        <div className="section-container max-w-3xl text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-border bg-gradient-to-br from-primary/30 to-transparent font-display text-4xl font-bold text-primary">
            MSM
          </div>
          <h1 className="mt-8 font-display text-4xl font-bold text-foreground md:text-5xl">
            Let's connect
          </h1>
          <p className="mt-4 text-muted-foreground">
            Always open to interesting data, ML, and agentic AI conversations.
          </p>

          <a
            href="mailto:salman@example.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-display text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-5 w-5" /> salman@example.com
          </a>

          <div className="mt-10 flex justify-center gap-4">
            {[
              { href: "https://github.com", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "https://kaggle.com", icon: Trophy, label: "Kaggle" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
