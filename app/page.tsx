import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  Workflow,
  X,
} from "lucide-react";

const skills = [
  { name: "Backend", items: ["PHP", "Laravel", "REST APIs", "python","Authentication"], icon: Server },
  { name: "Data & infrastructure", items: ["MySQL", "Redis", "Queues", "Docker"], icon: Database },
  { name: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"], icon: Code2 },
  { name: "Integrations", items: ["Webhooks", "Third-party APIs", "AI workflows", "Testing"], icon: Workflow },
];

const projects = [
  {
    number: "01",
    category: "BACKEND · MEDIA",
    title: "Streaming platform infrastructure",
    description:
      "Backend features for a digital content platform, including content APIs, subscription-aware access, and playback-related workflows.",
    stack: ["Laravel", "MySQL", "Redis", "REST APIs"],
    outcome: "Reliable content delivery and business logic",
  },
  {
    number: "02",
    category: "ANALYTICS · EVENT SYSTEMS",
    title: "Playback tracking & analytics",
    description:
      "Designed event-driven tracking flows for playback sessions, progress updates, qualification rules, and reporting pipelines.",
    stack: ["Laravel", "Queues", "MySQL", "Next.js"],
    outcome: "Clearer product metrics and reporting foundations",
  },
  {
    number: "03",
    category: "SEARCH · PERFORMANCE",
    title: "Catalog search & caching",
    description:
      "Worked on search and caching patterns for a multi-type catalog, with attention to response time, queue separation, and maintainability.",
    stack: ["Meilisearch", "Redis", "Laravel", "SQL"],
    outcome: "Faster discovery patterns for large catalogs",
  },
  {
    number: "04",
    category: "AI · AUTOMATION",
    title: "AI-assisted business workflows",
    description:
      "Exploring practical automations that connect AI models, APIs, and repeatable business processes to reduce manual follow-up.",
    stack: ["Python", "APIs", "LLMs", "Automation"],
    outcome: "A foundation for useful, measurable automations",
  },
];

const experience = [
  {
    period: "RECENT",
    role: "Software Engineer",
    company: "Mobitising Inc",
    details:
      "Building and maintaining backend features, integrations, APIs, and operational workflows for digital products.",
  },
  {
    period: "ONGOING",
    role: "Independent projects",
    company: "Automation & engineering",
    details:
      "Developing skills in Python, testing, AI-assisted workflows, and reliable integrations for client-facing solutions.",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="section-kicker mb-4">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 max-w-xl leading-7 text-muted">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
          <a href="#home" className="focus-ring flex items-center gap-3 rounded-sm" aria-label="Abbas, home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-sm font-bold text-accent">A.</span>
            <span className="text-sm font-semibold tracking-wide">ABBAS<span className="text-muted"> / ENGINEER</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-accent" href="#about">About</a>
            <a className="transition hover:text-accent" href="#work">Projects</a>
            <a className="transition hover:text-accent" href="#skills">Skills</a>
            <a className="transition hover:text-accent" href="#experience">Experience</a>
          </div>
          <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-bold text-ink transition hover:bg-lime-300">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-[780px] items-center pt-24 md:min-h-[850px]">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute -right-48 top-24 h-[560px] w-[560px] rounded-full bg-accent/[0.07] blur-[120px]" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 py-20 md:grid-cols-[1.25fr_.75fr] md:px-8">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-2 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to select opportunities
            </div>
            <p className="mb-5 font-mono text-sm text-accent">Hi, I&apos;m Abbas.</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              I build backend systems that <span className="text-muted">make products work.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">
              Software engineer focused on Laravel, APIs, data systems, and practical automation. I turn complex workflows into maintainable software.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-lime-300">
                Explore my work <ArrowDownRight size={16} />
              </a>
              <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full border border-line px-5 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500">
                Get in touch <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted">
              <span className="flex items-center gap-2"><Check size={14} className="text-accent" /> Backend engineering</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-accent" /> API integrations</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-accent" /> Automation</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute -inset-5 rounded-[2rem] border border-accent/10" />
            <div className="panel relative overflow-hidden rounded-2xl shadow-glow">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80"/><span className="h-2.5 w-2.5 rounded-full bg-accent/80"/></div>
                <span className="font-mono text-[10px] text-muted">developer.ts</span>
                <Braces size={15} className="text-muted"/>
              </div>
              <div className="p-6 font-mono text-xs leading-7 sm:p-7 sm:text-sm">
                <p className="text-slate-500">{"// A little about how I work"}</p>
                <p><span className="text-fuchsia-300">const</span> engineer = {"{"}</p>
                <p className="pl-4"><span className="text-sky-300">focus</span>: <span className="text-emerald-300">&quot;Backend systems&quot;</span>,</p>
                <p className="pl-4"><span className="text-sky-300">build</span>: [</p>
                <p className="pl-8 text-emerald-300">&quot;APIs&quot;,</p>
                <p className="pl-8 text-emerald-300">&quot;Data pipelines&quot;,</p>
                <p className="pl-8 text-emerald-300">&quot;Useful automation&quot;</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-sky-300">mindset</span>: <span className="text-emerald-300">&quot;Make it reliable&quot;</span>,</p>
                <p className="pl-4"><span className="text-sky-300">learning</span>: <span className="text-emerald-300">&quot;Every day&quot;</span></p>
                <p>{"};"}</p>
                <div className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-[11px] text-muted"><span className="h-1.5 w-1.5 rounded-full bg-accent"/><span>Available for interesting problems</span></div>
              </div>
            </div>
            <div className="panel absolute -bottom-7 -left-7 hidden rounded-xl px-4 py-3 sm:block">
              <p className="font-mono text-[10px] text-muted">CURRENT FOCUS</p>
              <p className="mt-1 text-sm font-semibold">Engineering + automation</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:px-8 md:py-28">
          <div>
            <p className="section-kicker mb-4">01 / About me</p>
            <h2 className="section-title">Practical engineering.<br/><span className="text-muted">Thoughtful execution.</span></h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>I&apos;m a software engineer who enjoys solving the problems behind the interface: API design, business logic, integrations, queues, data flows, and performance.</p>
            <p>I care about software that is understandable, observable, and dependable in production—not just code that works once on a laptop.</p>
            <p>I&apos;m also expanding into Python and AI-powered automation, with an interest in helping teams remove repetitive work through well-designed tools and integrations.</p>
            <div className="grid gap-3 pt-3 sm:grid-cols-3">
              <div className="panel rounded-xl p-4"><p className="text-sm font-semibold text-white">Build</p><p className="mt-1 text-xs leading-5 text-muted">Maintainable services</p></div>
              <div className="panel rounded-xl p-4"><p className="text-sm font-semibold text-white">Integrate</p><p className="mt-1 text-xs leading-5 text-muted">Systems that connect</p></div>
              <div className="panel rounded-xl p-4"><p className="text-sm font-semibold text-white">Improve</p><p className="mt-1 text-xs leading-5 text-muted">Performance & workflows</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <SectionHeading eyebrow="02 / Selected work" title="Problems I've worked on." description="A few representative engineering case studies. Replace these summaries with approved details, screenshots, and measurable results where you can share them." />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="panel group flex min-h-[310px] flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04] sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs text-accent">{project.number} / {project.category}</span>
                <ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-accent"/>
              </div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.description}</p>
              <p className="mt-5 border-l-2 border-accent/60 pl-3 text-xs text-slate-300">{project.outcome}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <Tag key={item}>{item}</Tag>)}</div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-muted">Note: these are portfolio summaries, not claims of quantified results. Add links or metrics only when you can verify and publicly share them.</p>
      </section>

      <section id="skills" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
          <SectionHeading eyebrow="03 / Toolkit" title="Tools I use to ship." description="A practical toolkit for building, integrating, and operating software. Keep this list aligned with the tools you can confidently discuss in an interview." />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({ name, items, icon: Icon }) => (
              <div key={name} className="panel rounded-2xl p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3"><span className="rounded-xl border border-accent/20 bg-accent/10 p-2.5 text-accent"><Icon size={19}/></span><h3 className="font-semibold">{name}</h3></div>
                <div className="flex flex-wrap gap-2">{items.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <SectionHeading eyebrow="04 / Experience" title="Building, learning, improving." description="A concise overview of my engineering focus. Add your official employer names, exact dates, and verified responsibilities before publishing." />
        <div className="relative ml-2 space-y-10 border-l border-line pl-7 sm:ml-4 sm:pl-10">
          {experience.map((item) => (
            <div key={item.role} className="relative">
              <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink sm:-left-[47px]"/>
              <p className="font-mono text-[10px] tracking-[.18em] text-accent">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.company}</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.10] via-panel to-panel p-7 sm:p-12 md:p-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-accent/[0.10] blur-[90px]"/>
          <div className="relative max-w-3xl">
            <p className="section-kicker mb-4">Have a challenge in mind?</p>
            <h2 className="section-title">Let&apos;s build something <span className="text-muted">useful.</span></h2>
            <p className="mt-5 max-w-xl leading-7 text-muted">I&apos;m interested in software engineering roles, backend projects, and practical automation work with teams that value clear communication and reliable delivery.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-lime-300">Start a conversation <ArrowRight size={16}/></a>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/[0.08] bg-[#07090d]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-kicker mb-4">05 / Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Have a good problem?</h2>
              <p className="mt-3 max-w-lg leading-7 text-muted">Reach out about a role, a project, or an idea worth exploring.</p>
              <a href="mailto:abbas.fatwanirb@yahoo.com" className="mt-6 inline-flex items-center gap-2 text-lg font-medium transition hover:text-accent"><Mail size={18} className="text-accent"/> Ghulam Abbas</a>
            </div>
            <div className="flex gap-3">
              <a aria-label="GitHub profile" href="https://github.com/abbasWJ" target="_blank" rel="noreferrer" className="focus-ring rounded-xl border border-line p-3 text-slate-300 transition hover:border-accent/50 hover:text-accent"><Github size={19}/></a>
              <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/abbasfatwani110" target="_blank" rel="noreferrer" className="focus-ring rounded-xl border border-line p-3 text-slate-300 transition hover:border-accent/50 hover:text-accent"><Linkedin size={19}/></a>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Abbas. Built with Next.js and Tailwind CSS.</p>
            <a href="#home" className="inline-flex items-center gap-1 transition hover:text-accent">Back to top <ArrowUpRight size={13}/></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
