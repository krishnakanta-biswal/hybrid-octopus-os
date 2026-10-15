
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const iconMap = {
  brain: BrainCircuit,
  workflow: Workflow,
  activity: Activity,
  shield: ShieldCheck,
};

export default function MetricCard({ metric }) {
  const Icon = iconMap[metric.icon] || Activity;
  const isPositive = metric.trend === "up";

  return (
    <article className={`os-metric-card accent-${metric.accent || "mint"}`}>
      <div className="os-metric-top">
        <span className="os-metric-icon">
          <Icon size={19} strokeWidth={1.8} />
        </span>

        <span className="os-metric-menu" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>

      <p className="os-metric-label">{metric.label}</p>

      <div className="os-metric-value-row">
        <h2>{metric.value}</h2>

        <span className={`os-metric-change ${metric.trend || "stable"}`}>
          {isPositive ? (
            <ArrowUpRight size={14} />
          ) : metric.trend === "down" ? (
            <ArrowDownRight size={14} />
          ) : (
            <span className="os-metric-stable-dot" />
          )}
          {metric.change}
        </span>
      </div>

      <p className="os-metric-description">
        {metric.description || metric.changeLabel}
      </p>

      <div className="os-metric-bottom">
        <span>{metric.changeLabel}</span>
        <ArrowRight size={14} />
      </div>
    </article>
  );
}
