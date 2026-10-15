import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  CircleHelp,
  Cpu,
  Database,
  FileChartColumn,
  FileText,
  Files,
  Globe,
  Layers,
  MessageSquare,
  Plug,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap
} from "lucide-react";

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import MetricGrid from "../dashboard/MatricGrid";
import RecentActivity from "../dashboard/RecentActivity";
import "../dashboard/DashboardSections.css";
import "./ModulePage.css";

const iconMap = {
  activity: Activity,
  brain: BrainCircuit,
  bell: Bell,
  book: BookOpen,
  cpu: Cpu,
  database: Database,
  "file-chart": FileChartColumn,
  "file-text": FileText,
  files: Files,
  globe: Globe,
  layers: Layers,
  message: MessageSquare,
  plug: Plug,
  shield: ShieldCheck,
  sparkles: Sparkles,
  users: Users,
  workflow: Workflow,
  zap: Zap
};

export default function ModulePage({ pageKey, data }) {
  if (!data) {
    return (
      <DashboardLayout>
        <main className="os-dashboard-page">
          <h1>Page unavailable</h1>
          <p>This module configuration could not be found.</p>
        </main>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <main className="os-dashboard-page os-module-page">
        <header className="os-module-page-header">
          <div>
            <span className="os-section-eyebrow">
              <Sparkles size={13} />
              {data.eyebrow}
            </span>

            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>

          <span className="os-module-page-breadcrumb">
            Workspace <ArrowRight size={12} /> {data.title}
          </span>
        </header>

        <MetricGrid metrics={data.stats} />

        <section className="os-module-content-section">
          <div className="os-section-heading">
            <div>
              <span className="os-section-eyebrow">WORKSPACE OVERVIEW</span>
              <h2>{data.sectionTitle}</h2>
              <p>{data.sectionDescription}</p>
            </div>

            <span className="os-section-count">
              {String(data.items.length).padStart(2, "0")} ITEMS
            </span>
          </div>

          <div className="os-module-resource-grid">
            {data.items.map((item) => {
              const Icon = iconMap[item.icon] || CircleHelp;

              return (
                <article
                  className={`os-resource-card accent-${item.accent || "mint"}`}
                  key={item.id}
                >
                  <div className="os-resource-card-top">
                    <span className="os-resource-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    <span className={`os-resource-status ${item.status.toLowerCase().replace(/\s+/g, "-")}`}>
                      <i />
                      {item.status}
                    </span>
                  </div>

                  <span className="os-resource-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>

                  <div className="os-resource-card-footer">
                    <span>{item.detail}</span>
                    <ArrowUpRight size={15} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="os-module-activity-section">
          <RecentActivity activities={data.activities || []} />
        </section>

        <footer className="os-dashboard-footer">
          <span>HYBRID OCTOPUS OS</span>
          <strong>{data.title} · Workspace module</strong>
        </footer>
      </main>
    </DashboardLayout>
  );
}
