
import { Orbit } from "lucide-react";

export default function Brand({ compact = false, onClick }) {
  return (
    <a
      href="/"
      className={`os-brand ${compact ? "os-brand-compact" : ""}`}
      aria-label="Hybrid Octopus OS home"
      onClick={onClick}
    >
      <span className="os-brand-mark">
        <Orbit size={23} strokeWidth={1.8} />
      </span>

      {!compact && (
        <span className="os-brand-copy">
          <strong>hybrid octopus</strong>
          <small>INTELLIGENCE OPERATING SYSTEM</small>
        </span>
      )}
    </a>
  );
}
