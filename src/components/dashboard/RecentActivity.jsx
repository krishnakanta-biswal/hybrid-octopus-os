
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Database,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  activity: Activity,
  brain: BrainCircuit,
  database: Database,
  shield: ShieldCheck,
  sparkles: Sparkles,
  workflow: Workflow,
};

export default function RecentActivity({ activities = [] }) {
  const navigate = useNavigate();

  return (
    <section className="os-panel os-recent-panel">
      <div className="os-panel-heading">
        <div>
          <div className="os-panel-title-row">
            <span className="os-panel-heading-icon">
              <Clock3 size={17} />
            </span>
            <h2>Recent activity</h2>
          </div>
          <p>Latest updates from your workspace.</p>
        </div>

        <button
          type="button"
          className="os-view-all"
          onClick={() => navigate("/activity")}
        >
          View all <ArrowRight size={14} />
        </button>
      </div>

      <div className="os-recent-list">
        {activities.length === 0 ? (
          <div className="os-recent-empty">
            No activity to display yet.
          </div>
        ) : (
          activities.map((item) => {
            const Icon = iconMap[item.icon] || Activity;

            return (
              <article className="os-recent-item" key={item.id}>
                <span className={`os-recent-icon status-${item.status || "info"}`}>
                  <Icon size={16} />
                </span>

                <div className="os-recent-copy">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>

                <div className="os-recent-meta">
                  <span>{item.time}</span>
                  {item.status === "success" && (
                    <CheckCircle2 size={14} />
                  )}
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
