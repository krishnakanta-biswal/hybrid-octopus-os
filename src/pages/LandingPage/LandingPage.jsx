
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  Command,
  Database,
  Fingerprint,
  GitBranch,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Orbit,
  Play,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import "./LandingPage.css";
import LandingFooter from "../../components/layout/Landing/LandingFooter";

const navigation = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Principles", href: "#principles" },
];

const capabilities = [
  {
    number: "01",
    title: "Context",
    description:
      "Give intelligence the information, goals, and environment it needs to understand the bigger picture.",
    icon: Layers3,
    tone: "mint",
    tag: "SHARED UNDERSTANDING",
  },
  {
    number: "02",
    title: "AI models",
    description:
      "Bring different model capabilities into one workspace, ready for the right task at the right time.",
    icon: BrainCircuit,
    tone: "blue",
    tag: "MODEL ORCHESTRATION",
  },
  {
    number: "03",
    title: "Memory",
    description:
      "Design for continuity, with information that can remain useful across sessions and workflows.",
    icon: Database,
    tone: "purple",
    tag: "PERSISTENT KNOWLEDGE",
  },
  {
    number: "04",
    title: "Permissions",
    description:
      "Make access boundaries explicit so capabilities can be governed by clear authorization rules.",
    icon: LockKeyhole,
    tone: "amber",
    tag: "CONTROLLED ACCESS",
  },
  {
    number: "05",
    title: "Decisions",
    description:
      "Make proposed outcomes easier to inspect, understand, question, and review.",
    icon: GitBranch,
    tone: "pink",
    tag: "TRANSPARENT REASONING",
  },
  {
    number: "06",
    title: "Actions",
    description:
      "Connect intelligence to workflows with visible status and human review where required.",
    icon: Workflow,
    tone: "mint",
    tag: "SUPERVISED EXECUTION",
  },
];

const principles = [
  {
    icon: Fingerprint,
    title: "You stay in control",
    description:
      "Human oversight is a core design principle, not an afterthought.",
  },
  {
    icon: Network,
    title: "One connected system",
    description:
      "Keep the layers of intelligence connected instead of isolated in separate tools.",
  },
  {
    icon: ShieldCheck,
    title: "Trust through visibility",
    description:
      "Make context, permissions, decisions, and proposed actions easier to inspect.",
  },
];

function Brand({ footer = false }) {
  return (
    <a
      className={`brand-lockup${footer ? " brand-lockup-footer" : ""}`}
      href="#home"
      aria-label="Hybrid Octopus OS home"
    >
      <span className="brand-symbol">
        <Atom size={23} strokeWidth={1.7} />
      </span>

      <span className="brand-wordmark">
        <span>
          Hybrid<span className="brand-wordmark-accent">Octopus</span>
        </span>
        <span className="brand-subtitle">INTELLIGENCE OPERATING SYSTEM</span>
      </span>
    </a>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowUpRight,
  className = "",
}) {
  return (
    <a
      className={`landing-button landing-button-${variant} ${className}`}
      href={href}
    >
      <span>{children}</span>
      <Icon size={16} strokeWidth={1.8} />
    </a>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div className="section-eyebrow">
      <span />
      {children}
    </div>
  );
}

function IntelligenceVisual() {
  const nodes = [
    {
      id: "context",
      label: "Context",
      detail: "Shared understanding",
      icon: Layers3,
      className: "visual-node-context",
    },
    {
      id: "models",
      label: "AI models",
      detail: "Intelligence layer",
      icon: BrainCircuit,
      className: "visual-node-models",
    },
    {
      id: "memory",
      label: "Memory",
      detail: "Knowledge layer",
      icon: Database,
      className: "visual-node-memory",
    },
    {
      id: "permissions",
      label: "Permissions",
      detail: "Access boundaries",
      icon: LockKeyhole,
      className: "visual-node-permissions",
    },
    {
      id: "decisions",
      label: "Decisions",
      detail: "Human review",
      icon: GitBranch,
      className: "visual-node-decisions",
    },
    {
      id: "actions",
      label: "Actions",
      detail: "Supervised execution",
      icon: Workflow,
      className: "visual-node-actions",
    },
  ];

  return (
    <div
      className="intelligence-visual"
      role="img"
      aria-label="Illustration of six connected intelligence layers surrounding a human-controlled core"
    >
      <div className="visual-grid" />

      <div className="visual-orbit visual-orbit-outer" />
      <div className="visual-orbit visual-orbit-inner" />
      <div className="visual-orbit visual-orbit-diagonal" />

      <svg
        className="visual-connections"
        viewBox="0 0 540 500"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="connection-gradient">
            <stop offset="0%" stopColor="#75e0c1" stopOpacity=".12" />
            <stop offset="50%" stopColor="#75e0c1" stopOpacity=".8" />
            <stop offset="100%" stopColor="#75e0c1" stopOpacity=".12" />
          </linearGradient>
        </defs>

        <path d="M270 250 L130 110" />
        <path d="M270 250 L410 110" />
        <path d="M270 250 L465 250" />
        <path d="M270 250 L410 390" />
        <path d="M270 250 L130 390" />
        <path d="M270 250 L75 250" />
      </svg>

      <div className="visual-core">
        <div className="visual-core-glow" />
        <div className="visual-core-icon">
          <Atom size={37} strokeWidth={1.5} />
        </div>
        <span className="visual-core-kicker">THE CORE</span>
        <strong>Human control</strong>
        <span className="visual-core-status">
          <span /> Oversight by design
        </span>
      </div>

      {nodes.map(({ id, label, detail, icon: Icon, className }) => (
        <div className={`visual-node ${className}`} key={id}>
          <div className="visual-node-icon">
            <Icon size={18} strokeWidth={1.7} />
          </div>
          <div className="visual-node-copy">
            <strong>{label}</strong>
            <span>{detail}</span>
          </div>
          <span className="visual-node-indicator" />
        </div>
      ))}

      <div className="visual-floating-label visual-label-top">
        <CircleDot size={12} />
        INTELLIGENCE LAYERS
      </div>

      <div className="visual-floating-label visual-label-bottom">
        <span className="visual-live-dot" />
        ONE CONNECTED ECOSYSTEM
      </div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="landing-navbar">
      <div className="landing-navbar-inner">
        <Brand />

        <nav
          className={`landing-nav${menuOpen ? " landing-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="landing-nav-mobile-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Explore the vision <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="landing-navbar-actions">
          <a className="landing-nav-cta" href="/login">
            Explore the vision
            <ArrowUpRight size={15} />
          </a>

          <button
            className="landing-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="landing-hero" id="home">
      <div className="hero-background-glow hero-glow-left" />
      <div className="hero-background-glow hero-glow-right" />

      <div className="landing-container hero-container">
        <div className="hero-copy">
          <div className="hero-announcement">
            <span className="hero-announcement-icon">
              <Sparkles size={13} />
            </span>
            <span>ANOTHER WAY TO THINK ABOUT AI</span>
            <ChevronRight size={13} />
          </div>

          <h1>
            Intelligence,
            <br />
            <span className="hero-title-gradient">without the chaos.</span>
          </h1>

          <p className="hero-description">
            Meet a new foundation for connected intelligence. Bring context,
            models, memory, decisions, and actions into one human-controlled
            system.
          </p>

          <div className="hero-actions">
            <ButtonLink href="#platform">
              Discover the platform
              <ArrowUpRight />
            </ButtonLink>

            <a className="hero-secondary-link" href="#how-it-works">
              <span className="hero-play-icon">
                <Play size={14} fill="currentColor" />
              </span>
              Understand the vision
            </a>
          </div>

          <div className="hero-trust-line">
            <ShieldCheck size={15} />
            <span>Human oversight. Connected intelligence.</span>
          </div>
        </div>

        <IntelligenceVisual />

        <div className="hero-scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}

function VisionStrip() {
  return (
    <section className="vision-strip">
      <div className="landing-container vision-strip-inner">
        <div className="vision-strip-intro">
          <span className="vision-strip-dot" />
          <span>THE BIGGER PICTURE</span>
        </div>

        <p>
          Not another isolated AI tool.
          <span> A foundation for a connected intelligence ecosystem.</span>
        </p>

        <div className="vision-strip-symbol">
          <Orbit size={20} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="landing-section platform-section" id="platform">
      <div className="landing-container">
        <div className="section-intro section-intro-centered">
          <SectionEyebrow>ONE SYSTEM. SIX CONNECTED LAYERS.</SectionEyebrow>

          <h2>
            Everything intelligence needs.
            <br />
            <span>Nothing hidden from you.</span>
          </h2>

          <p>
            Hybrid Octopus OS is envisioned as a shared foundation where the
            parts of an intelligent workflow can work together instead of
            operating in isolation.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map(
            ({ number, title, description, icon: Icon, tone, tag }) => (
              <article
                className={`capability-card capability-${tone}`}
                key={number}
              >
                <div className="capability-card-top">
                  <div className="capability-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="capability-number">{number}</span>
                </div>

                <span className="capability-tag">{tag}</span>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="capability-card-bottom">
                  <span>CORE LAYER</span>
                  <ArrowUpRight size={16} />
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Bring the context",
      text: "Establish the goal, relevant information, and boundaries for the work.",
    },
    {
      number: "02",
      title: "Coordinate intelligence",
      text: "Organize model capabilities, memory, and decision-making around the task.",
    },
    {
      number: "03",
      title: "Review before action",
      text: "Make proposed actions visible and introduce human approval where required.",
    },
  ];

  return (
    <section className="landing-section workflow-section" id="how-it-works">
      <div className="landing-container workflow-layout">
        <div className="workflow-copy">
          <SectionEyebrow>FROM FRAGMENTED TO CONNECTED</SectionEyebrow>

          <h2>
            Intelligence should
            <br />
            <span>work as one.</span>
          </h2>

          <p className="workflow-description">
            A task rarely needs just a model. It needs context, relevant
            knowledge, clear boundaries, considered decisions, and a way to
            move forward.
          </p>

          <div className="workflow-steps">
            {steps.map((step) => (
              <div className="workflow-step" key={step.number}>
                <div className="workflow-step-number">{step.number}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="workflow-visual">
          <div className="workflow-visual-header">
            <div>
              <span className="workflow-window-dot" />
              <span className="workflow-window-dot" />
              <span className="workflow-window-dot" />
            </div>
            <span>INTELLIGENCE FLOW / CONCEPT</span>
          </div>

          <div className="workflow-flow">
            <div className="workflow-input-node">
              <div className="workflow-input-icon">
                <Command size={18} />
              </div>
              <div>
                <strong>Your objective</strong>
                <span>Goal + context</span>
              </div>
              <Check size={16} />
            </div>

            <div className="workflow-connector">
              <span />
              <span />
              <span />
            </div>

            <div className="workflow-processing">
              <div className="workflow-processing-top">
                <span className="workflow-processing-icon">
                  <Atom size={22} />
                </span>
                <div>
                  <strong>Intelligence core</strong>
                  <span>Connected layers</span>
                </div>
                <span className="workflow-processing-status">
                  <span /> READY
                </span>
              </div>

              <div className="workflow-mini-layers">
                <span>Context</span>
                <span>Models</span>
                <span>Memory</span>
              </div>

              <div className="workflow-processing-rule">
                <ShieldCheck size={14} />
                Permissions and review boundaries
              </div>
            </div>

            <div className="workflow-connector">
              <span />
              <span />
              <span />
            </div>

            <div className="workflow-review-node">
              <div className="workflow-review-icon">
                <Fingerprint size={20} />
              </div>
              <div>
                <strong>Human review</strong>
                <span>Inspect the proposed outcome</span>
              </div>
              <span className="workflow-review-badge">IN CONTROL</span>
            </div>

            <div className="workflow-output-node">
              <div className="workflow-output-icon">
                <Zap size={18} />
              </div>
              <div>
                <strong>Next step</strong>
                <span>Proceed only when authorized</span>
              </div>
              <ArrowRight size={17} />
            </div>
          </div>

          <div className="workflow-visual-footer">
            <ShieldCheck size={14} />
            <span>A conceptual workflow, not a live execution engine.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="landing-section principles-section" id="principles">
      <div className="landing-container">
        <div className="principles-heading">
          <div className="section-intro">
            <SectionEyebrow>BUILT AROUND A DIFFERENT PRINCIPLE</SectionEyebrow>
            <h2>
              More capable.
              <br />
              <span>Still accountable.</span>
            </h2>
          </div>

          <p>
            The goal is not to remove people from the process. It is to give
            people a clearer, more coherent way to direct intelligent systems.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <article className="principle-item" key={title}>
              <div className="principle-icon">
                <Icon size={22} strokeWidth={1.7} />
              </div>
              <span className="principle-index">
                PRINCIPLE 0{index + 1}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="landing-section final-cta-section" id="contact">
      <div className="landing-container">
        <div className="final-cta">
          <div className="final-cta-glow" />

          <div className="final-cta-content">
            <div className="final-cta-icon">
              <Atom size={25} />
            </div>

            <SectionEyebrow>A FOUNDATION FOR WHAT COMES NEXT</SectionEyebrow>

            <h2>
              Don't just add more AI.
              <br />
              <span>Connect the intelligence.</span>
            </h2>

            <p>
              Explore the vision for a more coherent, adaptable, and
              human-controlled intelligence ecosystem.
            </p>

            <ButtonLink
              href="/login"
              className="final-cta-button"
              icon={ArrowUpRight}
            >
              Start a conversation
            </ButtonLink>

            <span className="final-cta-note">
              A vision in development. Built one layer at a time.
            </span>
          </div>

          <div className="final-cta-orbit final-cta-orbit-one" />
          <div className="final-cta-orbit final-cta-orbit-two" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-container landing-footer-inner">
        <Brand footer />

        <p>
          A vision for connected intelligence.
          <br />
          Designed around human control.
        </p>

        <a className="footer-back-to-top" href="#home">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="landing-container landing-footer-bottom">
        <span>© {new Date().getFullYear()} Hybrid Octopus OS</span>
        <span>Concept and frontend prototype</span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <HeroSection />
        <VisionStrip />
        <PlatformSection />
        <WorkflowSection />
        <PrinciplesSection />
        <FinalCTA />
      </main>

      <LandingFooter />
    </div>
  );
}
