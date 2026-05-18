import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    n: "01",
    name: "GenPix",
    period: "Mar — Jul 2025",
    stack: "FastAPI · Flux · MongoDB · React",
    blurb:
      "A story-to-image platform powered by Flux. Semantic chunking preserves narrative continuity across generations.",
    metrics: ["+45% reader engagement", "+60% continuity", "99.9% uptime over 200+ PDFs"],
    href: "https://github.com/Swasthik-Prabhu",
  },
  {
    n: "02",
    name: "Swanya",
    period: "Dec 2024 — Jan 2025",
    stack: "FastAPI · MongoDB · React",
    blurb:
      "A two-sided marketplace connecting customers with service providers — geo features, realtime alerts and an AI assistant.",
    metrics: ["+25% booking efficiency", "+30% engagement", "−40% support response time"],
    href: "https://github.com/Swasthik-Prabhu",
  },
  {
    n: "03",
    name: "Social Cause Fundraising",
    period: "Nov — Dec 2024",
    stack: "React · FastAPI · SQLite",
    blurb:
      "A crowdfunding platform with an admin panel, authentication, real-time alerts and donor recommendations.",
    metrics: ["100+ donors onboarded", "+40% donation tracking", "−30% response time"],
    href: "https://github.com/Swasthik-Prabhu",
  },
];

const STACK = [
  { group: "Languages", items: ["Python", "C / C++", "JavaScript", "SQL", "HTML / CSS"] },
  { group: "Frameworks", items: ["FastAPI", "Node.js", "React.js"] },
  { group: "Cloud & DevOps", items: ["AWS", "Terraform", "Docker", "Jenkins", "Boto3", "Bash"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"] },
  { group: "Tools", items: ["Git", "Linux", "Postman", "PyCharm", "Figma", "Jupyter"] },
];

const ACHIEVEMENTS = [
  { year: "Feb 2025", title: "5th Place — INFOTHON", body: "Legal Aid Platform with an AI chatbot for case guidance." },
  { year: "Nov 2024", title: "2nd Runner-Up — SRINATHON", body: "Digital marketplace connecting customers with providers." },
  { year: "Aug 2023", title: "Top 10 — SOCIOVISION", body: "Irriga Tech, a Figma-prototyped smart irrigation app." },
];

function Portfolio() {
  return (
    <div className="noise min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">Swasthik<span className="text-muted-foreground">.</span></a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:swasthikp03@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-sm border border-border px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
            AVAILABLE FOR WORK — 2026
          </div>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tight">
            AI-native<br />
            <span className="italic text-muted-foreground">full-stack</span> developer.
          </h1>
          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-lg text-muted-foreground leading-relaxed">
              I'm Swasthik R Prabhu — a CS undergrad building end-to-end products
              across React, FastAPI, AI and cloud infrastructure. Currently
              interning as a Product Engineer at Deloitte.
            </p>
            <div className="md:col-span-6 md:col-start-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition">
                View selected work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm hover:bg-secondary transition">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display text-4xl md:text-5xl">
              {["FastAPI", "✦", "AWS", "✦", "Docker", "✦", "React", "✦", "MongoDB", "✦", "Terraform", "✦", "Python", "✦"].map((w, j) => (
                <span key={j} className={j % 2 === 1 ? "text-muted-foreground" : ""}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + IMAGE */}
      <section id="about" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <img
                src={portrait}
                alt="Abstract black and white texture"
                width={1024}
                height={1280}
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="mt-4 font-mono text-xs text-muted-foreground flex justify-between">
              <span>UDUPI, KARNATAKA</span>
              <span>IST · UTC+5:30</span>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="font-mono text-xs text-muted-foreground mb-6">(ABOUT)</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              I build backends that feel inevitable — fast, observable, and ready to ship.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8 text-sm">
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2">EDUCATION</div>
                <p className="text-foreground">Sahyadri College of Engineering</p>
                <p className="text-muted-foreground">B.E. Computer Science · 2022–2026</p>
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2">CURRENTLY</div>
                <p className="text-foreground">Product Engineer Intern</p>
                <p className="text-muted-foreground">Deloitte · Jan — Jul 2025</p>
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2">FOCUS</div>
                <p className="text-muted-foreground">Full-stack JS, API design, agile delivery, AI integrations.</p>
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2">OFF-SCREEN</div>
                <p className="text-muted-foreground">Trained in Yakshagana since 2016 — preserving cultural heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-4">(SELECTED WORK)</div>
              <h2 className="font-display text-5xl md:text-7xl">Recent projects.</h2>
            </div>
            <a href="https://github.com/Swasthik-Prabhu" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              All on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {PROJECTS.map((p) => (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group grid md:grid-cols-12 gap-6 py-10 px-2 hover:bg-secondary/40 transition-colors"
              >
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-2">{p.n}</div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl flex items-center gap-3">
                    {p.name}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground mt-2">{p.period}</p>
                </div>
                <div className="md:col-span-4 text-muted-foreground leading-relaxed">
                  <p>{p.blurb}</p>
                  <p className="font-mono text-xs mt-3">{p.stack}</p>
                </div>
                <ul className="md:col-span-3 space-y-1.5 text-sm">
                  {p.metrics.map((m) => (
                    <li key={m} className="flex gap-2 text-foreground">
                      <span className="text-muted-foreground">—</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="font-mono text-xs text-muted-foreground mb-4">(THE STACK)</div>
          <h2 className="font-display text-5xl md:text-7xl mb-16">Tools of the trade.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {STACK.map((s) => (
              <div key={s.group}>
                <div className="font-mono text-xs text-muted-foreground border-b border-border pb-3 mb-4">
                  {s.group.toUpperCase()}
                </div>
                <ul className="space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="text-lg">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="font-mono text-xs text-muted-foreground mb-4">(RECOGNITION)</div>
          <h2 className="font-display text-5xl md:text-7xl mb-16">Wins & moments.</h2>
          <div className="space-y-px bg-border">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="bg-background grid md:grid-cols-12 gap-6 py-8 px-2">
                <div className="md:col-span-2 font-mono text-xs text-muted-foreground pt-2">{a.year}</div>
                <h3 className="md:col-span-4 font-display text-2xl md:text-3xl">{a.title}</h3>
                <p className="md:col-span-6 text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="font-mono text-xs text-muted-foreground mb-6">(CONTACT)</div>
          <h2 className="font-display text-6xl md:text-9xl leading-[0.95] tracking-tight">
            Have a project<br />
            <span className="italic">in mind?</span>
          </h2>
          <a
            href="mailto:swasthikp03@gmail.com"
            className="mt-12 inline-flex items-center gap-3 font-display text-2xl md:text-4xl border-b border-border pb-2 hover:border-foreground transition-colors"
          >
            swasthikp03@gmail.com <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8" />
          </a>

          <div className="mt-20 grid md:grid-cols-4 gap-8 text-sm">
            <a href="mailto:swasthikp03@gmail.com" className="group flex items-start gap-3">
              <Mail className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" />
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-1">EMAIL</div>
                swasthikp03@gmail.com
              </div>
            </a>
            <a href="tel:+918105347688" className="group flex items-start gap-3">
              <Phone className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" />
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-1">PHONE</div>
                +91 8105347688
              </div>
            </a>
            <a href="https://github.com/Swasthik-Prabhu" target="_blank" rel="noreferrer" className="group flex items-start gap-3">
              <Github className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" />
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-1">GITHUB</div>
                @Swasthik-Prabhu
              </div>
            </a>
            <a href="https://linkedin.com/in/swasthik-r-prabhu-644607258/" target="_blank" rel="noreferrer" className="group flex items-start gap-3">
              <Linkedin className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" />
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-1">LINKEDIN</div>
                swasthik-r-prabhu
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" /> Udupi, Karnataka, India · 574104
          </div>
          <div>© {new Date().getFullYear()} Swasthik R Prabhu — Crafted with care.</div>
        </div>
      </footer>
    </div>
  );
}
