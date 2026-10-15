
import MetricCard from "./MatricCard";

export default function MetricGrid({ metrics = [] }) {
  return (
    <section className="os-metric-grid" aria-label="Workspace metrics">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </section>
  );
}
