
import { CalendarDays, Sparkles } from "lucide-react";

export default function WelcomeSection({ overview, user }) {
  const today = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="os-welcome-section">
      <div>
        <div className="os-eyebrow">
          <Sparkles size={14} />
          YOUR INTELLIGENCE OS
        </div>

        <h1>
          {overview?.title || "Your intelligence, connected."}
        </h1>

        <p>
          {overview?.subtitle ||
            "A clear view of your workspace and connected systems."}
        </p>
      </div>

      <div className="os-date-badge">
        <CalendarDays size={16} />
        <span>{today}</span>
      </div>
    </section>
  );
}
