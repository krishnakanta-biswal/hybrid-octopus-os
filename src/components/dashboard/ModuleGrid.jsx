
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Workflow,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  brain: BrainCircuit,
  database: Database,
  workflow: Workflow,
};

export default function ModuleGrid({ modules = [] }) {
  const navigate = useNavigate();

  return (
    <section className="os-modules-section">
      <div className="os-section-heading">
        <div>
          <span className="os-section-eyebrow">YOUR ECOSYSTEM</span>
          <h2>Platform modules</h2>
          <p>Explore the building blocks of your workspace.</p>
        </div>

        <span className="os-section-count">
          {String(modules.length).padStart(2, "0")} MODULES
        </span>
      </div>

      <div className="os-module-grid">
        {modules.map((module) => {
          const Icon = iconMap[module.icon] || BrainCircuit;
          const isAvailable = module.status === "Available";

          return (
            <article
              key={module.id}
              className={`os-module-card accent-${module.accent || "mint"}`}
            >
              <div className="os-module-card-top">
                <span className="os-module-icon">
                  <Icon size={21} strokeWidth={1.7} />
                </span>

                <span className={`os-module-status ${isAvailable ? "available" : "coming"}`}>
                  <i />
                  {module.status}
                </span>
              </div>

              <h3>{module.title}</h3>
              <p>{module.description}</p>

              <button
                type="button"
                className="os-module-link"
                disabled={!isAvailable}
                onClick={() => navigate(module.route)}
              >
                {isAvailable ? "Open module" : "Coming soon"}
                <ArrowUpRight size={15} />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
