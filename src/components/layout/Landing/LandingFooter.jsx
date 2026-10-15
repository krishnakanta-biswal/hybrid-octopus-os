import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Code2,
  Mail,
  MoveUpRight,
} from "lucide-react";

import "./LandingFooter.css";

import "./LandingFooter.css";


import "./LandingFooter.css";

const footerGroups = [
  {
    title: "PLATFORM",
    links: [
      { label: "Overview", href: "#home" },
      { label: "Intelligence layers", href: "#platform" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Human control", href: "#principles" },
    ],
  },
  {
    title: "CAPABILITIES",
    links: [
      { label: "Context", href: "#platform" },
      { label: "AI models", href: "#platform" },
      { label: "Memory", href: "#platform" },
      { label: "Permissions", href: "#platform" },
      { label: "Decisions & actions", href: "#platform" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "Our vision", href: "#how-it-works" },
      { label: "Core principles", href: "#principles" },
      { label: "Get in touch", href: "mailto:" },
    ],
  },
];

function FooterBrand() {
  return (
    <a
      href="#home"
      className="lf-brand"
      aria-label="Hybrid Octopus OS home"
    >
      <span className="lf-brand-icon">
        <Atom size={25} strokeWidth={1.6} />
      </span>

      <span className="lf-brand-copy">
        <span className="lf-brand-name">
          Hybrid<span>Octopus</span>
        </span>
        <span className="lf-brand-caption">
          INTELLIGENCE OPERATING SYSTEM
        </span>
      </span>
    </a>
  );
}

function FooterLinkGroup({ title, links }) {
  return (
    <div className="lf-link-group">
      <h3>{title}</h3>

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              <span>{link.label}</span>
              <ArrowUpRight
                className="lf-link-arrow"
                size={13}
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterSocialLink({ href, label, children }) {
  return (
    <a
      className="lf-social-link"
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="lf-footer" id="footer">
      <div className="lf-top-glow" />

      <div className="lf-container">
        {/* Upper CTA */}
        <section className="lf-cta" aria-labelledby="lf-cta-title">
          <div className="lf-cta-orb lf-cta-orb-one" />
          <div className="lf-cta-orb lf-cta-orb-two" />

          <div className="lf-cta-content">
            <span className="lf-cta-eyebrow">
              <span className="lf-live-dot" />
              THE NEXT CHAPTER OF INTELLIGENCE
            </span>

            <h2 id="lf-cta-title">
              Less fragmentation.
              <br />
              <span>More connected intelligence.</span>
            </h2>

            <p>
              Explore a vision where intelligence, context, and human
              oversight work together as one coherent system.
            </p>

            <a className="lf-cta-button" href="mailto:">
              <span>Start a conversation</span>
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="lf-cta-decoration" aria-hidden="true">
            <div className="lf-cta-ring lf-cta-ring-one" />
            <div className="lf-cta-ring lf-cta-ring-two" />
            <div className="lf-cta-ring lf-cta-ring-three" />
            <div className="lf-cta-core">
              <Atom size={39} strokeWidth={1.4} />
            </div>
            <span className="lf-cta-decoration-label">
              HUMAN-CONTROLLED
            </span>
          </div>
        </section>

        {/* Main footer */}
        <div className="lf-main">
          <div className="lf-brand-column">
            <FooterBrand />

            <p className="lf-brand-description">
              A foundation for connected intelligence. Bringing models,
              context, memory, decisions, and actions together—with people
              at the center.
            </p>

            <div className="lf-socials">
              <FooterSocialLink
                href="https://github.com/"
                label="GitHub"
              >
                <Code2 size={18} />
              </FooterSocialLink>

              <FooterSocialLink
                href="https://www.linkedin.com/"
                label="LinkedIn"
              >
                <ArrowUpRight size={18} />
              </FooterSocialLink>

              <FooterSocialLink href="mailto:" label="Email">
                <Mail size={17} />
              </FooterSocialLink>
            </div>
          </div>

          {footerGroups.map((group) => (
            <FooterLinkGroup
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="lf-bottom">
          <div className="lf-copyright">
            <span className="lf-copyright-mark">©</span>
            <span>{year} Hybrid Octopus OS</span>
          </div>

          <div className="lf-bottom-note">
            <span className="lf-bottom-dot" />
            A vision for human-controlled intelligence
          </div>

          <a className="lf-back-top" href="#home">
            Back to top
            <MoveUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
