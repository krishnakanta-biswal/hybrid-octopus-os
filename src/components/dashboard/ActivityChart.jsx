
import { Activity, ArrowUpRight, MoreHorizontal } from "lucide-react";

export default function ActivityChart({ activity }) {
  const series = activity?.series || [];
  const maxValue = Math.max(...series.map((item) => item.value), 1);

  return (
    <section className="os-panel os-activity-panel">
      <div className="os-panel-heading">
        <div>
          <div className="os-panel-title-row">
            <span className="os-panel-heading-icon">
              <Activity size={17} />
            </span>
            <h2>{activity?.title || "Workspace activity"}</h2>
          </div>
          <p>{activity?.subtitle || "Activity across your workspace."}</p>
        </div>

        <button
          type="button"
          className="os-panel-more"
          aria-label="Activity chart options"
          title="Activity chart options"
          onClick={() => {}}
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="os-activity-summary">
        <div>
          <span className="os-summary-label">
            {activity?.totalLabel || "Total operations"}
          </span>
          <strong>{activity?.total || "0"}</strong>
        </div>

        <span className="os-summary-change">
          <ArrowUpRight size={15} />
          {activity?.change || "0%"}
          <small>{activity?.changeLabel || "this period"}</small>
        </span>
      </div>

      <div
        className="os-chart"
        role="img"
        aria-label={`Workspace activity by day: ${series
          .map((item) => `${item.day} ${item.value}`)
          .join(", ")}`}
      >
        <div className="os-chart-grid-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="os-chart-bars">
          {series.map((item, index) => (
            <div className="os-chart-column" key={`${item.day}-${index}`}>
              <div className="os-chart-bar-track">
                <div
                  className={`os-chart-bar ${
                    index === series.length - 1 ? "highlighted" : ""
                  }`}
                  style={{
                    height: `${Math.max(5, (item.value / maxValue) * 100)}%`,
                  }}
                >
                  <span className="os-chart-tooltip">{item.value}</span>
                </div>
              </div>

              <span className="os-chart-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="os-chart-footer">
        <span><i className="os-chart-legend" /> Daily operations</span>
        <span>Last 7 days</span>
      </div>
    </section>
  );
}
