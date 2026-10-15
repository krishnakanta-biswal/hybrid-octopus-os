
import DashboardLayout from "../../components/layout/DashboardLayout/DashboardLayout";
import WelcomeSection from "../../components/dashboard/WelcomeSection";
import MetricGrid from "../../components/dashboard/MatricGrid";
import ActivityChart from "../../components/dashboard/ActivityChart";
import ModuleGrid from "../../components/dashboard/ModuleGrid";
import RecentActivity from "../../components/dashboard/RecentActivity";
import useDashboardData from "../../hooks/useDashboardData";

import "../../components/dashboard/DashboardSections.css";

export default function DashboardPage() {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    return (
      <DashboardLayout>
        <main className="os-dashboard-page">
          <div className="os-dashboard-loading" role="status">
            <span className="os-loading-orbit" />
            <strong>Preparing your workspace</strong>
            <p>Connecting your intelligence environment...</p>
          </div>
        </main>
      </DashboardLayout>
    );
  }

  if (error || !data) {
    return (
      <DashboardLayout>
        <main className="os-dashboard-page">
          <div className="os-dashboard-error" role="alert">
            <h1>Workspace unavailable</h1>
            <p>{error || "Dashboard data could not be loaded."}</p>
            <button type="button" onClick={() => window.location.reload()}>
              Try again
            </button>
          </div>
        </main>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      user={data.user}
      notifications={data.notifications || []}
    >
      <main className="os-dashboard-page">
        <WelcomeSection
          overview={data.overview}
          user={data.user}
        />

        <MetricGrid metrics={data.metrics} />

        <div className="os-dashboard-panels">
          <ActivityChart activity={data.activity} />
          <RecentActivity activities={data.recentActivity} />
        </div>

        <ModuleGrid modules={data.modules} />

        <footer className="os-dashboard-footer">
          <span>HYBRID OCTOPUS OS</span>
          <strong>One system. Infinite possibilities.</strong>
        </footer>
      </main>
    </DashboardLayout>
  );
}
