import { P as reactExports, H as jsxRuntimeExports } from "./server-j0sLpAlI.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const portrait = "/assets/portrait-BfesLnRv.jpg";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$5 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const NAV = [{
  label: "Work",
  href: "#work"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Stack",
  href: "#stack"
}, {
  label: "Contact",
  href: "#contact"
}];
const PROJECTS = [{
  n: "01",
  name: "GenPix",
  period: "Mar — Jul 2025",
  stack: "FastAPI · Flux · MongoDB · React",
  blurb: "A story-to-image platform powered by Flux. Semantic chunking preserves narrative continuity across generations.",
  metrics: ["+45% reader engagement", "+60% continuity", "99.9% uptime over 200+ PDFs"],
  href: "https://github.com/Swasthik-Prabhu"
}, {
  n: "02",
  name: "Swanya",
  period: "Dec 2024 — Jan 2025",
  stack: "FastAPI · MongoDB · React",
  blurb: "A two-sided marketplace connecting customers with service providers — geo features, realtime alerts and an AI assistant.",
  metrics: ["+25% booking efficiency", "+30% engagement", "−40% support response time"],
  href: "https://github.com/Swasthik-Prabhu"
}, {
  n: "03",
  name: "Social Cause Fundraising",
  period: "Nov — Dec 2024",
  stack: "React · FastAPI · SQLite",
  blurb: "A crowdfunding platform with an admin panel, authentication, real-time alerts and donor recommendations.",
  metrics: ["100+ donors onboarded", "+40% donation tracking", "−30% response time"],
  href: "https://github.com/Swasthik-Prabhu"
}];
const STACK = [{
  group: "Languages",
  items: ["Python", "C / C++", "JavaScript", "SQL", "HTML / CSS"]
}, {
  group: "Frameworks",
  items: ["FastAPI", "Node.js", "React.js"]
}, {
  group: "Cloud & DevOps",
  items: ["AWS", "Terraform", "Docker", "Jenkins", "Boto3", "Bash"]
}, {
  group: "Databases",
  items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"]
}, {
  group: "Tools",
  items: ["Git", "Linux", "Postman", "PyCharm", "Figma", "Jupyter"]
}];
const ACHIEVEMENTS = [{
  year: "Feb 2025",
  title: "5th Place — INFOTHON",
  body: "Legal Aid Platform with an AI chatbot for case guidance."
}, {
  year: "Nov 2024",
  title: "2nd Runner-Up — SRINATHON",
  body: "Digital marketplace connecting customers with providers."
}, {
  year: "Aug 2023",
  title: "Top 10 — SOCIOVISION",
  body: "Irriga Tech, a Figma-prototyped smart irrigation app."
}];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "noise min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-display text-xl tracking-tight", children: [
        "Swasthik",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, className: "text-muted-foreground hover:text-foreground transition-colors", children: n.label }, n.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:swasthikp03@gmail.com", className: "hidden md:inline-flex items-center gap-2 text-sm border border-border px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors", children: [
        "Let's talk ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "top", className: "pt-32 pb-20 lg:pt-40 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs font-mono text-muted-foreground mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" }),
        "AVAILABLE FOR WORK — 2026"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tight", children: [
        "AI-native",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground", children: "full-stack" }),
        " developer."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-12 gap-8 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-6 text-lg text-muted-foreground leading-relaxed", children: "I'm Swasthik R Prabhu — a CS undergrad building end-to-end products across React, FastAPI, AI and cloud infrastructure. Currently interning as a Product Engineer at Deloitte." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-6 md:col-start-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#work", className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:opacity-90 transition", children: [
            "View selected work ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm hover:bg-secondary transition", children: "Get in touch" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border py-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex whitespace-nowrap marquee-track", children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-12 px-6 font-display text-4xl md:text-5xl", children: ["FastAPI", "✦", "AWS", "✦", "Docker", "✦", "React", "✦", "MongoDB", "✦", "Terraform", "✦", "Python", "✦"].map((w, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: j % 2 === 1 ? "text-muted-foreground" : "", children: w }, j)) }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden rounded-sm border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Abstract black and white texture", width: 1024, height: 1280, className: "h-full w-full object-cover grayscale" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-mono text-xs text-muted-foreground flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "UDUPI, KARNATAKA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "IST · UTC+5:30" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-6 md:col-start-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-6", children: "(ABOUT)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl leading-tight", children: "I build backends that feel inevitable — fast, observable, and ready to ship." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-2 gap-8 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "EDUCATION" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: "Sahyadri College of Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "B.E. Computer Science · 2022–2026" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "CURRENTLY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: "Product Engineer Intern" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Deloitte · Jan — Jul 2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "FOCUS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Full-stack JS, API design, agile delivery, AI integrations." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "OFF-SCREEN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Trained in Yakshagana since 2016 — preserving cultural heritage." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "py-24 lg:py-32 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-4", children: "(SELECTED WORK)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl", children: "Recent projects." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/Swasthik-Prabhu", target: "_blank", rel: "noreferrer", className: "hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition", children: [
          "All on GitHub ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: PROJECTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.href, target: "_blank", rel: "noreferrer", className: "group grid md:grid-cols-12 gap-6 py-10 px-2 hover:bg-secondary/40 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 font-mono text-xs text-muted-foreground pt-2", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl md:text-4xl flex items-center gap-3", children: [
            p.name,
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground mt-2", children: p.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs mt-3", children: p.stack })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "md:col-span-3 space-y-1.5 text-sm", children: p.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }),
          m
        ] }, m)) })
      ] }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stack", className: "py-24 lg:py-32 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-4", children: "(THE STACK)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl mb-16", children: "Tools of the trade." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-10", children: STACK.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground border-b border-border pb-3 mb-4", children: s.group.toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: s.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-lg", children: i }, i)) })
      ] }, s.group)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-4", children: "(RECOGNITION)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl mb-16", children: "Wins & moments." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-px bg-border", children: ACHIEVEMENTS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background grid md:grid-cols-12 gap-6 py-8 px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 font-mono text-xs text-muted-foreground pt-2", children: a.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "md:col-span-4 font-display text-2xl md:text-3xl", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-6 text-muted-foreground", children: a.body })
      ] }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 lg:py-40 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-6", children: "(CONTACT)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-6xl md:text-9xl leading-[0.95] tracking-tight", children: [
        "Have a project",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "in mind?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:swasthikp03@gmail.com", className: "mt-12 inline-flex items-center gap-3 font-display text-2xl md:text-4xl border-b border-border pb-2 hover:border-foreground transition-colors", children: [
        "swasthikp03@gmail.com ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-6 w-6 md:h-8 md:w-8" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid md:grid-cols-4 gap-8 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:swasthikp03@gmail.com", className: "group flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-1", children: "EMAIL" }),
            "swasthikp03@gmail.com"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+918105347688", className: "group flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-1", children: "PHONE" }),
            "+91 8105347688"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/Swasthik-Prabhu", target: "_blank", rel: "noreferrer", className: "group flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-1", children: "GITHUB" }),
            "@Swasthik-Prabhu"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://linkedin.com/in/swasthik-r-prabhu-644607258/", target: "_blank", rel: "noreferrer", className: "group flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-1", children: "LINKEDIN" }),
            "swasthik-r-prabhu"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
        " Udupi, Karnataka, India · 574104"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Swasthik R Prabhu — Crafted with care."
      ] })
    ] }) })
  ] });
}
export {
  Portfolio as component
};
